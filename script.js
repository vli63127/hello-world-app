document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.getElementById('explore-btn');
  const glassCard = document.querySelector('.glass-card');

  // Add a simple interaction to the button
  exploreBtn.addEventListener('click', () => {
    // Create a ripple effect or light flash
    glassCard.style.transition = 'all 0.5s ease';
    glassCard.style.boxShadow = '0 0 50px rgba(126, 87, 194, 0.6)';

    const originalText = exploreBtn.innerText;
    exploreBtn.innerText = 'Welcome!';

    setTimeout(() => {
      glassCard.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
      exploreBtn.innerText = originalText;
    }, 1500);
  });

  // Subtle parallax effect on mouse move
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    glassCard.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
});
