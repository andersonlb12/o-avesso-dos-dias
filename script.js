const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".post-card");
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const selected = button.dataset.filter;
  cards.forEach(card => card.hidden = selected !== "todos" && card.dataset.category !== selected);
}));
