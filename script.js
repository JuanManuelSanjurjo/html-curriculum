async function downloadCurriculum(){
    const curriculum = document.querySelector('.curriculum');
    let canvas = await html2canvas(curriculum)
    let imgData = canvas.toDataURL('image/png')
    let pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: "a4"
      });
    pdf.addImage(imgData, 'PNG', 0, 0, 595, 842); // point units of an A4
    pdf.save('Juan Manuel Sanjurjo CV.pdf');
}

const button = document.querySelector(".btn")

button.addEventListener("click", downloadCurriculum )