import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'comprobantepdf';
  src: any;
  documento = new jsPDF({ format: 'a4' });

  Actualizar(){
    const doc = this.documento;

    const pageHeight =
    doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
  const pageWidth =
    doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
  console.log(pageHeight + ',' + pageWidth);

  // // page 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Prueba DAERAH AIR MINUM', pageWidth / 2, 16, {
    align: 'center',
  });
  doc.setFontSize(16);
  doc.text('TIRTA MAHAKAM', pageWidth / 2, 22, { align: 'center' });
  doc.setFontSize(14);
  doc.text('CABANG TENGGARONG', pageWidth / 2, 28, { align: 'center' });
  doc.setLineWidth(0.5);
  doc.line(10, 5, pageWidth - 10, 5);
  doc.line(10, 35, pageWidth - 10, 35);
  doc.line(10, 250, pageWidth - 10, 250);
  doc.line(10, 5, 10, 250);
  doc.line(pageWidth - 10, 5, pageWidth - 10, 250);

  doc.setFontSize(12);
  doc.text('SURAT PERNYATAAN PEMASANGAN', pageWidth / 2, 55, {
    align: 'center',
  });
  doc.setLineWidth(0.2);
  doc.line(66, 56, pageWidth - 66, 56);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);

  doc.text('Yang bertanda tangan di bawah ini:', 20, 75);
  doc.text('Atas Nama', 30, 85);
  doc.text(':', 70, 85);
  doc.text('Alamat', 30, 90);
  doc.text(':', 70, 90);
  doc.text('No. Sambungan', 30, 95);
  doc.text(':', 70, 95);

  let text2 = doc.splitTextToSize(
    'Menyatakan dengan sebenarnya bahwa sambungan air minum di tempat saya telah selesai dipasang dan ' +
      'mengalir dengan lancar dan memuaskan, pada:',
    pageWidth - 45
  );
  doc.text(text2, 20, 105);

  doc.text('Hari :', 20, 120);
  doc.text('Jam :', 20, 125);
  doc.text('Tanggal :', 70, 120);

  doc.text('Demikian pernyataan ini saya buat dengan sebenarnya.', 20, 135);

  doc.text('CV. ..........................', pageWidth / 2 - 50, 160, {
    align: 'center',
  });
  doc.text('Tenggarong, 20 Juni 2019', pageWidth / 2 + 50, 160, {
    align: 'center',
  });
  doc.text('Pelaksana: ', pageWidth / 2 - 50, 155, { align: 'center' });
  doc.text('Yang menyatakan,', pageWidth / 2 + 50, 150, { align: 'center' });
  doc.line(pageWidth / 2 + 35, 186, pageWidth / 2 + 65, 186);
  doc.text('Pelanggan', pageWidth / 2 + 50, 190, { align: 'center' });
  doc.line(pageWidth / 2 - 35, 186, pageWidth / 2 - 65, 186);
  doc.line(90, 231, pageWidth - 90, 231);
  doc.text('Direktur', pageWidth / 2 - 50, 190, { align: 'center' });
  doc.text('Pengawas', pageWidth / 2, 200, { align: 'center' });
  doc.text('Kepala Cabang Tenggarong', pageWidth / 2, 205, {
    align: 'center',
  });
  doc.text('NIK. 000 000 000', pageWidth / 2, 235, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.text('PELANGGAN', pageWidth / 2 + 50, 185, { align: 'center' });
  doc.text('PURWANTO', pageWidth / 2, 230, { align: 'center' });


  // generate
  let pdf = doc.output('datauristring', { filename: 'RAB' });
  let uri = pdf.split(',')[1];
  console.log(uri);
  this.src = this._base64ToArrayBuffer(uri);

  }

  _base64ToArrayBuffer(base64: string) {
      var binary_string = base64.replace(/\\n/g, "");
      binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    }


    GenerarPDF(){
        this.documento.save("comprobante.pdf");
    }

    ngOnInit() {
      this.Actualizar();
    }




}
