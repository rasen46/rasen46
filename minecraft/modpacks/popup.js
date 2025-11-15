document.addEventListener("DOMContentLoaded", () => {
  const downloadButtons = document.querySelectorAll(".download-btn");

  downloadButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filePath = button.getAttribute("data-file");
      const filename = button.getAttribute("data-filename") || "";

      const confirmed = confirm(`are you sure you want to download "${filename || filePath}"?`);
      if (confirmed) {
        const a = document.createElement("a");
        a.href = filePath;
        if (filename) {
          a.download = filename;
        }
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    });
  });
});