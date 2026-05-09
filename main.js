import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Simple audio handling
  const musicBtn = document.getElementById('music-toggle');
  const bgMusic = document.getElementById('bg-music');
  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicBtn.classList.remove('playing');
    } else {
      bgMusic.play();
      musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });

  // Enhanced GSAP Animations
  
  // Create main timeline
  const mainTimeline = gsap.timeline();
  
  // Background elements entrance
  gsap.from('.floating-hearts .heart', {
    scale: 0,
    opacity: 0,
    duration: 2,
    stagger: 0.3,
    ease: 'back.out(1.7)',
    delay: 0.5
  });
  
  gsap.from('.petals-group .petal', {
    scale: 0,
    opacity: 0,
    rotation: 180,
    duration: 3,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 1
  });

  // Navigation entrance
  mainTimeline
    .from('.nav__brand', {
      y: -100,
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: 'back.out(1.7)'
    })
    .from('.baby-container', {
      scale: 0,
      opacity: 0,
      rotation: 360,
      duration: 2,
      ease: 'back.out(1.7)'
    }, '-=1');

  // Hero content entrance
  mainTimeline
    .from('.hero__tag', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero__title', {
      y: 80,
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .from('.hero__subtitle', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8');

  // Rose entrance with spectacular effect
  mainTimeline
    .from('.flower-container', {
      scale: 0,
      opacity: 0,
      rotation: -180,
      duration: 2,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('.rose-petals .petal', {
      scale: 0,
      opacity: 0,
      rotation: 360,
      transformOrigin: 'center',
      duration: 1.5,
      stagger: 0.1,
      ease: 'back.out(2)'
    }, '-=1.5')
    .from('.rose-leaf', {
      scale: 0,
      opacity: 0,
      rotation: 90,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=1')
    .from('.rose-stem', {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 1.5,
      ease: 'power3.out'
    }, '-=1.5');

  // Heart photo frame spectacular entrance
  mainTimeline
    .from('.photo-heart-container', {
      scale: 0,
      opacity: 0,
      rotation: 180,
      duration: 2.5,
      ease: 'back.out(1.7)'
    }, '-=1')
    .from('.heart-border', {
      strokeDasharray: '1000',
      strokeDashoffset: '1000',
      duration: 2,
      ease: 'power2.out'
    }, '-=2')
    .from('.heart-photo', {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'back.out(1.7)'
    }, '-=1.5')
    .from('.heart-sparkles .sparkle', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'back.out(2)'
    }, '-=1')
    .from('.photo-floating-hearts .photo-heart', {
      scale: 0,
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=1');

  // Letter entrance with writing effect
  mainTimeline
    .from('.letter-container', {
      y: 100,
      opacity: 0,
      rotationX: 45,
      duration: 2,
      ease: 'power3.out'
    }, '-=1')
    .from('.letter-paper-svg', {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: 'back.out(1.7)'
    }, '-=1.5')
    .from('.letter-fold-svg', {
      scale: 0,
      transformOrigin: 'bottom left',
      duration: 1,
      ease: 'back.out(2)'
    }, '-=1');

  // Scroll indicator
  mainTimeline
    .from('.scroll-indicator', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.5');

  // Footer entrance
  gsap.from('.footer__main, .footer__wishes', {
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power3.out'
  });

  // Interactive hover effects
  const roseContainer = document.querySelector('.flower-container');
  const letterContainer = document.querySelector('.letter-container');
  const babyContainer = document.querySelector('.baby-container');
  const photoContainer = document.querySelector('.photo-heart-container');

  // Rose hover effect
  roseContainer.addEventListener('mouseenter', () => {
    gsap.to('.rose-petals', {
      scale: 1.1,
      duration: 0.5,
      ease: 'power2.out'
    });
    gsap.to('.rose-svg', {
      filter: 'drop-shadow(0 20px 40px rgba(233, 30, 99, 0.6))',
      duration: 0.5
    });
  });

  roseContainer.addEventListener('mouseleave', () => {
    gsap.to('.rose-petals', {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
    gsap.to('.rose-svg', {
      filter: 'drop-shadow(0 15px 30px rgba(233, 30, 99, 0.4))',
      duration: 0.5
    });
  });

  // Heart photo hover effect
  photoContainer.addEventListener('mouseenter', () => {
    gsap.to('.photo-heart-container', {
      scale: 1.1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    });
    gsap.to('.heart-sparkles .sparkle', {
      opacity: 1,
      scale: 2,
      duration: 0.3,
      stagger: 0.05
    });
    gsap.to('.photo-floating-hearts .photo-heart', {
      scale: 1.5,
      duration: 0.3,
      stagger: 0.1
    });
  });

  photoContainer.addEventListener('mouseleave', () => {
    gsap.to('.photo-heart-container', {
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    });
    gsap.to('.heart-sparkles .sparkle', {
      opacity: 0,
      scale: 1,
      duration: 0.3,
      stagger: 0.05
    });
    gsap.to('.photo-floating-hearts .photo-heart', {
      scale: 1,
      duration: 0.3,
      stagger: 0.1
    });
  });

  // Letter hover effect
  letterContainer.addEventListener('mouseenter', () => {
    gsap.to('.letter-container', {
      scale: 1.05,
      rotationY: 5,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  letterContainer.addEventListener('mouseleave', () => {
    gsap.to('.letter-container', {
      scale: 1,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  // Baby hover effect
  babyContainer.addEventListener('mouseenter', () => {
    gsap.to('.baby-container', {
      scale: 1.1,
      duration: 0.3,
      ease: 'back.out(1.7)'
    });
    gsap.to('.baby-cheek', {
      opacity: 1,
      duration: 0.3
    });
  });

  babyContainer.addEventListener('mouseleave', () => {
    gsap.to('.baby-container', {
      scale: 1,
      duration: 0.3,
      ease: 'back.out(1.7)'
    });
    gsap.to('.baby-cheek', {
      opacity: 0.6,
      duration: 0.3
    });
  });

  // Continuous animations for enhanced liveliness
  gsap.to('.floating-hearts .heart', {
    y: -20,
    duration: 3,
    stagger: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });

  // Parallax effect for background elements
  gsap.to('.bg-pattern', {
    rotation: 360,
    duration: 60,
    repeat: -1,
    ease: 'none'
  });

  // Text shimmer effects
  gsap.to('.hero__title--accent', {
    textShadow: '0 0 30px rgba(255, 64, 129, 1)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });

  // Music button enhanced animation
  gsap.to('.music-btn', {
    boxShadow: '0 0 0 10px rgba(233, 30, 99, 0.3)',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });

  // Heart photo special effects
  gsap.to('.heart-shimmer', {
    x: 300,
    duration: 4,
    repeat: -1,
    repeatDelay: 4,
    ease: 'power2.inOut'
  });

  // Sparkles continuous animation
  gsap.to('.heart-sparkles', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
  });
});