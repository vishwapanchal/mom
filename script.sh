#!/usr/bin/env bash

set -e

echo "===================================================="
echo "✍️ Adding your beautiful apology and gratitude..."
echo "===================================================="

cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="kn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <title>ತಾಯಂದಿರ ದಿನದ ಶುಭಾಶಯಗಳು, ಅಮ್ಮ ❤️</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Great+Vibes&family=Cinzel:wght@500;700&family=Baloo+Tamma+2:wght@400;600;800&family=Dancing+Script:wght@400;500;600;700&family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
  <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>
</head>
<body style="font-family: 'Baloo Tamma 2', cursive;">

  <div id="welcome-screen">
    <div class="welcome-quote" style="font-family: 'Baloo Tamma 2', cursive;">"ಪ್ರಪಂಚಕ್ಕೆ ನೀವು ಕೇವಲ ಒಬ್ಬ ತಾಯಿ,<br>ಆದರೆ ನನಗೆ ನೀವೇ ನನ್ನ ಪ್ರಪಂಚ."</div>
    <div class="welcome-sub" style="font-family: 'Baloo Tamma 2', cursive;">ತಾಯಂದಿರ ದಿನದ ಶುಭಾಶಯಗಳು, ಅಮ್ಮ 🌸</div>
    <button id="open-letter-btn" style="font-family: 'Poppins', sans-serif;">Tap to Open Letter 💌</button>
  </div>

  <button id="music-toggle" class="music-btn" aria-label="Toggle Music" style="display: none;">🎵</button>

  <header class="hero" id="top">
    <nav class="nav" aria-label="Main navigation">
      <div class="nav__brand" style="font-family: 'Baloo Tamma 2', cursive;">ಅಮ್ಮನಿಗೆ</div>
      <div class="baby-illustration-wrapper" style="width: 220px; height: 220px; margin: 1rem auto 0 auto;">
        <model-viewer src="/baby.glb" auto-rotate auto-rotate-delay="0" shadow-intensity="1" style="width: 100%; height: 100%; background-color: transparent;" interaction-prompt="none" rotation-per-second="180deg"></model-viewer>
      </div>
    </nav>

    <div class="hero__container">
      <section class="hero__content" style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 2rem;">
        <div class="hero__text-content">
          <p class="hero__tag" style="font-family: 'Baloo Tamma 2', cursive;">ಅನಂತ ಪ್ರೀತಿಯೊಂದಿಗೆ</p>
          <h1 class="hero__title" style="font-family: 'Baloo Tamma 2', cursive;">
            ತಾಯಂದಿರ ದಿನದ ಶುಭಾಶಯಗಳು,<br />
            <span class="hero__title--accent">ಅಮ್ಮ ❤️</span>
          </h1>
          <p class="hero__subtitle" style="font-family: 'Baloo Tamma 2', cursive;">
            ಪ್ರೀತಿಗೆ ಯಾವುದೇ ಗಡಿಗಳಿಲ್ಲ ಮತ್ತು ನೀವು ಎಲ್ಲಿದ್ದರೂ ಅದೇ ನಮಗೆ ಮನೆ ಎಂದು ಕಲಿಸಿದ ಅದ್ಭುತ ಜೀವಕ್ಕೆ.
          </p>
        </div>

        <div class="hero__media-row" style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 2rem; width: 100%;">
          
          <div class="letter-container">
            <div class="animated-letter">
              <div class="letter-paper">
                <div class="letter-header" style="font-family: 'Baloo Tamma 2', cursive;">
                  <div class="letter-date">೧೦ ಮೇ, ೨೦೨೬</div>
                  <div class="letter-location">ನಿನ್ನ ಮಗನ ಪ್ರೀತಿಯಿಂದ</div>
                </div>
                
                <div class="letter-content">
                  <div class="letter-greeting">
                    <span class="greeting-text" style="font-family: 'Baloo Tamma 2', cursive; color: var(--primary);">ಶುಭೋದಯ ಅಮ್ಮ,</span>
                  </div>
                  
                  <div class="letter-body" style="font-family: 'Baloo Tamma 2', cursive;">
                    <div class="letter-section section-1">
                      <p class="letter-paragraph para-1">
                        <span class="letter-indent" style="font-family: 'Baloo Tamma 2', cursive;">ನೀ</span>ವು ಆರಾಮಾಗಿದ್ದೀರಿ ಮತ್ತು ತಿಂಡಿ ತಿಂದಿದ್ದೀರಿ ಎಂದು ಭಾವಿಸುತ್ತೇನೆ. ನಿಮ್ಮ ಆರೋಗ್ಯ ಮತ್ತು ಸದಾ ಕಾಲದ ಸಂತೋಷಕ್ಕಾಗಿ ನಾನು ದೇವರಲ್ಲಿ ಪ್ರಾರ್ಥಿಸುತ್ತೇನೆ.
                      </p>
                    </div>
                    
                    <div class="letter-rose-section">
                      <div class="rose-divider-line left-line"></div>
                      <div class="flower-container" style="width: 160px; height: 160px;">
                        <model-viewer src="/flower.glb" auto-rotate auto-rotate-delay="0" shadow-intensity="1" style="width: 100%; height: 100%; background-color: transparent;" interaction-prompt="none" rotation-per-second="180deg"></model-viewer>
                      </div>
                      <div class="rose-divider-line right-line"></div>
                    </div>
                    
                    <div class="letter-section section-2">
                      <p class="letter-paragraph para-3">
                        ನಾನು ಅನೇಕ ಬಾರಿ ನಿಮ್ಮ ಮನಸ್ಸಿಗೆ ನೋವು ಮಾಡಿದ್ದಕ್ಕೆ ಮತ್ತು ನಿಮ್ಮ ಹೃದಯವನ್ನು ನೋಯಿಸಿದ್ದಕ್ಕೆ ದಯವಿಟ್ಟು ನನ್ನನ್ನು ಕ್ಷಮಿಸಿ. ಪ್ರತಿ ಬಾರಿಯೂ ನನ್ನ ತಪ್ಪುಗಳನ್ನು ಮನ್ನಿಸಿ, ನನ್ನ ಕೋಪವನ್ನು ಸಹಿಸಿಕೊಂಡು, ನನ್ನನ್ನು ಸದಾ ಪ್ರೀತಿಸುತ್ತಿರುವುದಕ್ಕೆ ನಿಮಗೆ ತುಂಬು ಹೃದಯದ ಧನ್ಯವಾದಗಳು.
                      </p>

                      <p class="letter-paragraph para-4">
                        ನಾನು ನಿಮ್ಮನ್ನು ತುಂಬಾ ಪ್ರೀತಿಸುತ್ತೇನೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಬಗ್ಗೆ ಕಾಳಜಿ ವಹಿಸಿ ಮತ್ತು ಯಾವುದೇ ಕಾರಣಕ್ಕೂ ಹೆಚ್ಚು ಒತ್ತಡ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ. 
                      </p>
                      
                      <p class="letter-paragraph para-5">
                        ನಿಮಗೆ ಶುಭ ದಿನವಾಗಲಿ!
                      </p>
                    </div>
                    
                    <div class="letter-closing-section">
                      <p class="letter-closing" style="font-family: 'Baloo Tamma 2', cursive;">
                        ತಾಯಂದಿರ ದಿನದ ಶುಭಾಶಯಗಳು, ಅಮ್ಮ!<br>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="memory-photo-wrapper">
                  <img src="image.png" alt="Amma and Me" class="memory-photo" />
                </div>
                
                <div class="letter-signature">
                  <div class="signature-line">
                    <span class="signature-label" style="font-family: 'Baloo Tamma 2', cursive;">ಎಂದೆಂದಿಗೂ ನಿನ್ನ ಪ್ರೀತಿಯ ಮಗ,</span>
                    <span class="signature-name" style="font-family: 'Great Vibes', cursive;">Vishwa</span>
                  </div>
                </div>
                
                <div class="letter-decorations">
                  <div class="corner-decoration top-left">🌸</div>
                  <div class="corner-decoration top-right">💕</div>
                  <div class="corner-decoration bottom-left">🌹</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="scroll-indicator">
      <span style="font-family: 'Baloo Tamma 2', cursive;">ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ</span>
      <div class="scroll-indicator__line"></div>
    </div>
  </header>

  <footer class="footer">
    <div class="footer__container">
      <p class="footer__main" style="font-family: 'Baloo Tamma 2', cursive;">
        ನೀವು ಕಲಿಸಿದ ಪ್ರತಿಯೊಂದು ವಿಷಯ ಮತ್ತು ನನ್ನ ಹೃದಯದಲ್ಲಿರುವ ಎಲ್ಲಾ ಪ್ರೀತಿಯಿಂದ ಮಾಡಲಾಗಿದೆ <span class="heart-beat">❤️</span> ನಿಮ್ಮ <span style="font-family: 'Poppins', sans-serif;">Vishwa</span>
      </p>
      <p class="footer__wishes" style="font-family: 'Baloo Tamma 2', cursive;">
        ತಾಯಂದಿರ ದಿನದ ಶುಭಾಶಯಗಳು, ಅಮ್ಮ! 🌸
      </p>
    </div>
  </footer>

  <audio id="bg-music" loop preload="auto">
    <source src="/music.mp3" type="audio/mpeg">
  </audio>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="main.js"></script>
</body>
</html>
EOF

echo "✅ Apology and gratitude seamlessly added to the letter!"