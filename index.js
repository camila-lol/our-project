const searchInput = document.getElementById('search')
const cards = document.querySelectorAll('.card')

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(query) ? '' : 'none';
  })
})