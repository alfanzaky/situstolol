// Efek animasi fade-in saat scroll
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.3
  });

  cards.forEach(card => {
    observer.observe(card);
  });
});
