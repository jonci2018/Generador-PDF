const form = document.getElementById('pdfForm');
const previewTitle = document.getElementById('previewTitle');
const previewContent = document.getElementById('previewContent');
const downloadBtn = document.getElementById('downloadBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (title && content) {
        previewTitle.textContent = title;
        previewContent.textContent = content;
    } else {
        alert("Por favor completa todos los campos.");
    }
});

downloadBtn.addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!title || !content) {
        alert("Por favor completa el formulario antes de descargar.");
        return;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(title, 20, 30);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(content, 170);
    doc.text(lines, 20, 50);

    doc.save(title.replace(/\s+/g, '_') + ".pdf");
});
