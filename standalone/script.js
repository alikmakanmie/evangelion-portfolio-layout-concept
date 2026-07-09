/* ==========================================================================
   NERV TACTICAL HUD - EVA UNIT-00
   Standalone JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Clock Sync
  const clockElement = document.getElementById('clock');
  
  function updateTime() {
    const now = new Date();
    // Format: YYYY-MM-DD HH:MM:SS UTC
    const timeString = now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
    if (clockElement) {
      clockElement.textContent = timeString;
    }
  }
  
  updateTime();
  setInterval(updateTime, 1000);

  // 2. Tactical Parallax Interaction
  const posterBox = document.getElementById('posterBox');
  const layers = document.querySelectorAll('.parallax-layer');
  const customCursor = document.getElementById('customCursor');
  const centralRei = document.getElementById('centralRei');

  if (posterBox) {
    // Show and move custom cursor
    posterBox.addEventListener('mousemove', (e) => {
      const rect = posterBox.getBoundingClientRect();
      
      // Calculate mouse position relative to the poster box
      // Normalized between -0.5 and 0.5
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

      // Move custom cursor
      if (customCursor) {
        customCursor.style.left = `${(mouseX + 0.5) * 100}%`;
        customCursor.style.top = `${(mouseY + 0.5) * 100}%`;
      }

      // Parallax effect on layers
      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed')) || 0.1;
        
        // Base parallax strength (similar to React version)
        const parallaxStrength = 1.2;
        const baseOffset = 40; // max px displacement
        
        const translateX = mouseX * speed * parallaxStrength * baseOffset * 3;
        const translateY = mouseY * speed * parallaxStrength * baseOffset * 3;
        
        // Apply 3D transform without rotation for exact replication of React 2D look 
        // Or add slight rotation if desired for enhanced effect. The React version uses translate3d.
        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    });

    // Reset positions on mouse leave
    posterBox.addEventListener('mouseleave', () => {
      layers.forEach(layer => {
        layer.style.transform = `translate3d(0, 0, 0)`;
      });
    });

    // 3. Audio Feedback on Click (NERV Beep)
    const playTacticalSound = (freq = 880, duration = 0.08) => {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (err) {
        console.warn('Audio context blocked by browser', err);
      }
    };

    posterBox.addEventListener('click', () => {
      playTacticalSound(660, 0.12);
    });
    
    if (centralRei) {
      centralRei.addEventListener('mouseenter', () => {
        playTacticalSound(900, 0.03);
      });
    }
  }
});
