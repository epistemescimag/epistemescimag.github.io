// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove active class from all nav links
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to clicked link
    this.classList.add('active');

    // Smooth scroll to target section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Adjust the offset (100) as needed based on your header height
    if (scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100) {
      const id = section.getAttribute('id');
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

