document.addEventListener('DOMContentLoaded', () => {

  /* 🎬 PREPARE CINEMATIC ENTRANCE */
  if (window.gsap) {
    // We scale down the ENTIRE hero section (which includes the letter, text, and 3D baby)
    gsap.set(".hero", { scale: 0.85, opacity: 0, y: 120 });
    // And also hide the specific components so they can stagger in later
    gsap.set(".hero__tag, .hero__title, .hero__subtitle, .baby-illustration-wrapper, .letter-paper, .flower-container, .memory-photo-wrapper, .letter-signature", { 
      opacity: 0, 
      y: 50 
    });
  }

  /* 🎵 MUSIC & DRAMATIC UNLOCK */
  const welcome = document.getElementById('welcome-screen');
  const music = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');
  
  const updateBtn = () => {
    if (music && !music.paused) musicBtn.classList.add('playing');
    else if(musicBtn) musicBtn.classList.remove('playing');
  };

  if (musicBtn) {
    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (music.paused) music.play();
      else music.pause();
      updateBtn();
    });
  }

  const openBtn = document.getElementById('open-letter-btn');
  if(openBtn) {
    openBtn.addEventListener('click', () => {
      
      if (music) {
        music.play().catch(e => console.log("Audio play failed:", e));
        updateBtn();
      }
      
      if(musicBtn) {
        musicBtn.style.display = 'flex';
        musicBtn.style.opacity = '0';
        setTimeout(() => musicBtn.style.opacity = '1', 2000);
      }

      /* Trigger Dramatic Exit */
      welcome.classList.add('dramatic-exit');
      
      // Completely hide it after transition so it doesn't block clicks
      setTimeout(() => { welcome.style.display = 'none'; }, 1800);

      // Start Epic Reveal slightly before the exit finishes for a seamless look
      setTimeout(startMagicalAnimations, 400);
    });
  }

  /* ✨ EPIC REVEAL (GSAP) */
  function startMagicalAnimations() {
    if (!window.gsap) return;
    
    // Smoothly bring the whole container up
    gsap.to(".hero", { duration: 2.5, scale: 1, opacity: 1, y: 0, ease: "power4.out" });

    // Stagger in the contents
    gsap.to(".baby-illustration-wrapper", { duration: 2.5, y: 0, opacity: 1, delay: 0.5, ease: "elastic.out(1, 0.4)" });
    gsap.to(".hero__tag", { duration: 1.5, y: 0, opacity: 1, delay: 0.8, ease: "power2.out" });
    gsap.to(".hero__title", { duration: 2, y: 0, opacity: 1, delay: 1.0, ease: "power4.out" });
    gsap.to(".hero__subtitle", { duration: 2, y: 0, opacity: 1, delay: 1.2, ease: "power3.out" });
    
    gsap.to(".letter-paper", { duration: 2, y: 0, opacity: 1, delay: 1.6, ease: "power3.out" });
    gsap.to(".flower-container", { duration: 2, y: 0, opacity: 1, delay: 2.2, ease: "back.out(1.5)" });
    gsap.to(".memory-photo-wrapper", { duration: 2, y: 0, opacity: 1, delay: 2.6, ease: "back.out(1.2)" });
    gsap.to(".letter-signature", { duration: 2, y: 0, opacity: 1, delay: 3.0 });
  }

  /* 🌸 FALLING MAGIC DUST */
  function createMagicDust() {
    const particle = document.createElement('div');
    const symbols = ['✨', '💖', '🌸', '🤍'];
    particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '-5vh';
    particle.style.fontSize = (Math.random() * 12 + 10) + 'px';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    
    const fallDuration = Math.random() * 4000 + 4000;
    particle.style.transition = `transform ${fallDuration}ms linear, opacity ${fallDuration}ms ease-in-out`;
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.transform = `translateY(110vh) rotate(${Math.random() * 720}deg) translateX(${Math.random() * 100 - 50}px)`;
      particle.style.opacity = '0';
    }, 50);

    setTimeout(() => particle.remove(), fallDuration);
  }
  setInterval(createMagicDust, 400);

  /* 💖 MAGICAL TOUCH TRAIL */
  document.addEventListener('mousemove', createTrail);
  document.addEventListener('touchmove', createTrail, {passive: true});

  function createTrail(e) {
    if (Math.random() > 0.4) return;
    const trail = document.createElement('div');
    trail.innerHTML = ['💖', '✨', '🌸'][Math.floor(Math.random() * 3)];
    trail.style.position = 'fixed';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';

    let x = e.clientX || (e.touches && e.touches[0].clientX);
    let y = e.clientY || (e.touches && e.touches[0].clientY);

    trail.style.left = (x - 10) + 'px';
    trail.style.top = (y - 10) + 'px';
    trail.style.fontSize = (Math.random() * 10 + 10) + 'px';
    trail.style.transition = 'all 1s ease-out';
    trail.style.opacity = '1';

    document.body.appendChild(trail);

    setTimeout(() => {
      trail.style.transform = `translateY(-50px) scale(0)`;
      trail.style.opacity = '0';
    }, 10);
    setTimeout(() => trail.remove(), 1000);
  }
});

/* =========================================
   7. SMART PAUSE (Page Visibility API)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');
  let wasPlayingBeforeHide = false;

  document.addEventListener("visibilitychange", () => {
    if (!music) return;

    if (document.hidden) {
      // The user minimized the page or switched tabs
      wasPlayingBeforeHide = !music.paused;
      music.pause();
    } else {
      // The user came back to the page!
      if (wasPlayingBeforeHide) {
        music.play().catch(e => console.log("Auto-resume failed:", e));
      }
    }

    // Safely update the music button animation
    if (musicBtn) {
      if (!music.paused) {
        musicBtn.classList.add('playing');
      } else {
        musicBtn.classList.remove('playing');
      }
    }
  });
});
