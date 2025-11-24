// Cria o botão
const downloadBtn = document.createElement("button");
downloadBtn.textContent = "⬇️ Baixar Wallpaper da Reyna";
downloadBtn.classList.add("btn");

downloadBtn.style.display = "block";
downloadBtn.style.margin = "3rem auto";
downloadBtn.style.fontSize = "1.5rem";
downloadBtn.style.cursor = "pointer";

// Adiciona o botão
const aboutSection = document.querySelector(".about");
aboutSection.appendChild(downloadBtn);

// Faz o download do arquivo local
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./img1.png";  // imagem salva na sua pasta
  link.download = "img1.png"; // força o download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert("📥 Download do wallpaper da Reyna iniciado!");
});
