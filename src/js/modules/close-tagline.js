function closeTagline() {
  const closeBtn = document.querySelector("#tagline-close");
  const tagline = document.querySelector("#tagline");

  closeBtn.addEventListener("click", function() {
    tagline.remove();
  });
}

export default closeTagline;
