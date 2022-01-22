
import jsPDF from "jspdf";
import "jspdf-autotable";
import './roboto-normal'

export const exportPdfTable = (dataTable) => {
    const unit = "pt";
    const size = "A4"; 
    const orientation = "portrait"; 

    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);
    const headers = [["Name", "Duration"]];

    const data = dataTable.map(item=> [item.author.name,item.duration.presentation]);

    let content = {
        startY: 50,
        head: headers,
        body: data,
        styles: {
            font: 'roboto'
        }
    };

    doc.autoTable(content);
    doc.save("exportTable.pdf")
}