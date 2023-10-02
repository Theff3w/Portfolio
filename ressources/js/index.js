// Mes boutons
const btnInfo = document.getElementById('btnInfo');
const btnProjet = document.getElementById('btnProjet');
const btnContact = document.getElementById('btnContact');

// Mes articles
const articleInfo = document.querySelector('.info');
const articleProjet = document.querySelector('.projet');
const articleContact = document.querySelector('.contact');

// Fonction pour masquer tous les articles
function masquerTousLesArticles() {
  articleInfo.classList.remove('visible');
  articleProjet.classList.remove('visible');
  articleContact.classList.remove('visible');
  articleInfo.classList.add('hidden');
  articleProjet.classList.add('hidden');
  articleContact.classList.add('hidden');
}

// Le BTN Info
btnInfo.addEventListener('click', () => {
  masquerTousLesArticles();

  articleInfo.classList.remove('hidden');
  articleInfo.classList.add('visible');
});

// Le BTN Projet
btnProjet.addEventListener('click', () => {
  masquerTousLesArticles();

  articleProjet.classList.remove('hidden');
  articleProjet.classList.add('visible');
});

// Le BTN Contact
btnContact.addEventListener('click', () => {
  masquerTousLesArticles();

  articleContact.classList.remove('hidden');
  articleContact.classList.add('visible');
});