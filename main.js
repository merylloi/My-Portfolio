// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  // Show the scroll-to-top button when scrolling down
  window.addEventListener("scroll", function() {
    const btn = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  // Scroll-to-top functionality
  window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Intersection Observer for fade-in effect on sections
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });
  sections.forEach(section => observer.observe(section));
});
