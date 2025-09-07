const model = document.getElementById("model");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");

// buka modal
img.onclick = function () {
  model.classList.remove("hidden");
  model.classList.add("flex");
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// tutup model
closeBtn.onclick = function () {
  model.classList.remove("flex")
  model.classList.add("hidden");
}

// klik di luar gambar = tutup model
model.onclick = function (e) {
  if (e.target === model) {
    model.classList.add("hidden");
    model.classList.remove("flex")
  }
}