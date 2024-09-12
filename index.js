const parentContainer = document.querySelector(".project-container");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;

  const isReadMoreBtn = current.className.includes("read-more-btn");

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".read-more-text");

  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("Read More")
    ? "Read Less..."
    : "Read More....";
});
