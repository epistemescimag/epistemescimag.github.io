

  // Initialize all flip cards
  document.querySelectorAll('.team-member-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.card-inner').style.transform = 'rotateY(0)';
    });
  });

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTeamPage);