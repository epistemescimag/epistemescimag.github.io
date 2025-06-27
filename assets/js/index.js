// // Smooth scrolling for navigation
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
    
//     // Remove active class from all nav links
//     document.querySelectorAll('nav a').forEach(link => {
//       link.classList.remove('active');
//     });
    
//     // Add active class to clicked link
//     this.classList.add('active');
    
//     // Smooth scroll to target section
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// // Update active nav link on scroll
// window.addEventListener('scroll', function() {
//   const scrollPosition = window.scrollY;
//   const windowHeight = window.innerHeight;
  
//   document.querySelectorAll('section').forEach(section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;
    
//     if (scrollPosition >= sectionTop - 100 && 
//         scrollPosition < sectionTop + sectionHeight - 100) {
//       const id = section.getAttribute('id');
//       document.querySelectorAll('nav a').forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${id}`) {
//           link.classList.add('active');
//         }
//       });
//     }
//   });
// });

// Submit button functionality
const submitButton = document.querySelector('.submit-button');
if (submitButton) {
  submitButton.addEventListener('click', function() {
    // Replace with actual submission logic
    alert('Submission portal will be added here!');
  });
}

// Select the specific section by ID
    const section = document.getElementById('clickable-section');

    // Add click event listener to open a new tab/window
    section.addEventListener('click', () => {
      window.open('https://example.com', '_blank');
    });

// social media links functionality
const socialIcons = document.querySelectorAll('.social-links i');
socialIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    const platform = this.classList.contains('fa-instagram') ? 'Instagram' :
                    this.classList.contains('fa-linkedin-in') ? 'LinkedIn' :
                    this.classList.contains('fa-envelope') ? 'Email' : 'Other';
    
    console.log(`${platform} link clicked`);
    // Add actual social media links here
  });
});

// Article items interaction
const articleItems = document.querySelectorAll('.article-item');
articleItems.forEach(item => {
  item.addEventListener('click', function() {
    // Add functionality for when an article is clicked
    console.log('Article clicked:', this.querySelector('.article-title').textContent);
  });
});

// PDF Viewer Function
function openPdf(issueId) {
  console.log("Opening PDF:", issueId);
  window.open(`viewer.html?book=${issueId}`, "_blank")}