// Load header
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
    // Set active class based on current page
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
  });

// Load footer
fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  });

  // tis is for html
  //after footer ends before body ends