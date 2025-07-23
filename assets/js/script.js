// assets/js/script.js
document.querySelectorAll("section").forEach(sec => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });
  observer.observe(sec);
});
