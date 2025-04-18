function afficherSection(id) {
    // Masquer toutes les sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
  
    // Afficher la section désirée
    document.getElementById(id).classList.add('active');
  
    // Masquer le header
    document.getElementById('hero').style.display = 'none';
  
    // Gérer les liens actifs dans la navbar
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active-link');
    });
  
    const clickedLink = Array.from(document.querySelectorAll('.nav-links a')).find(link =>
      link.getAttribute('onclick')?.includes(id)
    );
    if (clickedLink) {
      clickedLink.classList.add('active-link');
    }
  }
  
  function afficherAccueil() {
    // Masquer les autres sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
  
    // Afficher l'accueil
    document.getElementById('hero').style.display = 'block';
  
    // Mettre le lien actif
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active-link');
    });
  
    const accueilLink = Array.from(document.querySelectorAll('.nav-links a')).find(link =>
      link.getAttribute('onclick')?.includes('afficherAccueil')
    );
    if (accueilLink) {
      accueilLink.classList.add('active-link');
    }
  }
  
  // Lancer l'accueil par défaut
  document.addEventListener('DOMContentLoaded', () => {
    afficherAccueil();
  });
  