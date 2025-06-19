
  const magazineContainers = document.querySelectorAll('.magazine-image-container');
  
  magazineContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
      this.querySelector('.magazine-image').style.transform = 'scale(1.05)';
      this.querySelector('.magazine-image').style.filter = 'brightness(0.7)';
      this.querySelector('.view-button').style.opacity = '1';
      this.querySelector('.view-button').style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    container.addEventListener('mouseleave', function() {
      this.querySelector('.magazine-image').style.transform = 'scale(1)';
      this.querySelector('.magazine-image').style.filter = 'brightness(1)';
      this.querySelector('.view-button').style.opacity = '0';
      this.querySelector('.view-button').style.transform = 'translate(-50%, -50%) scale(0)';
    });
  });

// PDF Viewer Function
function openPdf(issueId) {
  console.log("Opening PDF:", issueId);
  window.open(`viewer.html?book=${issueId}`, "_blank");
}

// Article Viewer Function
function openArticle(articleId) {
  const articleUrls = {
    'cataract-article': '/articles/cataract.html',
    'neural-article': '/articles/neural.html',
    'synthesis-article': '/articles/synthesis.html',
    'microbial-article': '/articles/microbial.html',
    'urban-article': '/articles/urban.html',
    'energy-article': '/articles/energy.html'
  };
  
  if (articleUrls[articleId]) {
    window.open(articleUrls[articleId], '_blank');
  } else {
    console.error('Article URL not found for:', articleId);
  }
}