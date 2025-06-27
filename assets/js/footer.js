// social media links functionality
document.querySelectorAll('.social-links i').forEach(icon => {
  icon.addEventListener('click', function() {
    const platform = this.classList.contains('fa-instagram') ? 'Instagram' :
                    this.classList.contains('fa-linkedin-in') ? 'LinkedIn' :
                    this.classList.contains('fa-envelope') ? 'Email' : 'Other';

    console.log(`${platform} link clicked`);
    
     if (platform === 'Instagram') {
       window.open('https://www.instagram.com/iiser_episteme/', '_blank');
     } else if (platform === 'LinkedIn') {
       window.open('https://www.linkedin.com/company/epistememagazine/', '_blank');
     } else if (platform === 'Email') {
       window.location.href = 'mailto:episteme@iiserbpr.ac.in';
     }
  });
});