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

// ENCABEZADO Y MARCO 


doc.setFont('helvetica', 'bold');
doc.setFontSize (6);
doc.text('Original', 100, 8, { align: 'center' });
doc.setLineWidth(0.5);
doc.line (10,5, pageWidth - 10, 5);
doc.line (10,9, pageWidth - 10, 9);
doc.line (10,250, pageWidth - 10, 250);
doc.line (10,5, pageWidth - 200, 250);
doc.line (pageWidth - 10, 5, pageWidth - 10, 250) ;

doc.line (100, 19, 100, 45);
doc.rect (90, 9, 20, 10);



// DATOS VENDEDOR


doc.setFont('helvetica', 'bold');
doc.setFontSize(13);
doc.text ('Marcelo Nigro', 35, 16);
doc.text ('Factura', 145, 16);
doc.setFontSize(14);
doc.text ('C',  100, 14.5, { align: 'center' });
doc.setFontSize(6);
doc.text ('CÓD. 11', 100, 18, { align: 'center' });
doc.setFontSize(9);


doc.text ('Razón Social', 12, 24);
doc.text ('Domicilio', 12, 29);
doc.text ('Sit. IVA', 12, 34);
doc.text ('Teléfono', 12, 39);

doc.text ('Marcelo Nigro', 47, 24);
doc.text ('Domicilio', 47, 29);
doc.text ('Responsable / Monotributo', 47, 34);
doc.text ('353-0000000', 47, 39);



// PARTE FACTURA


doc.text ('Pto.Vta.'     , 132, 24);
doc.text ('Comp', 162, 24);
doc.text ('Emisión', 102, 29);
doc.text ('CUIT', 102, 34)
doc.text ('II BB', 102, 39);
doc.text ('Inicio Act.', 102, 44);

doc.text ('0004'     , 150, 24);
doc.text ('000000003', 175, 24);
doc.text ('16/02/2023', 132, 29);
doc.text ('20-20749874-3', 132, 34)
doc.text ('280203947', 132, 39);
doc.text ('01/01/2000', 132, 44);

doc.line (10, 45, pageWidth - 10, 45);



// datos del cliente

doc.text ('Cliente', 12, 50);
doc.text ('Domicilio', 12, 55);
doc.text ('Localidad', 12, 60);
doc.text ('Nro Doc.', 135, 50);
doc.text ('Sit. IVA',135, 55);
doc.text ('Cond. Vta.', 135, 60);

doc.text ('0001 - Consumidor Final', 37, 50);
doc.text ('Domicilio', 37, 55);
doc.text ('JAMES CRAIK', 37, 60);
doc.text ('00000000', 155, 50);
doc.text ('IVA Consumidor Final',155, 55);
doc.text ('Contado', 155, 60);

doc.line (10, 62.5, pageWidth - 10, 62.5);


// ENCABEZADO VENTA

doc.setDrawColor(0);
doc.setFillColor(155, 155, 155);
doc.rect(10.3, 63, 189.5, 5, "F");

doc.text ('Código',12, 66.5);
doc.line (40, 63, 40, 68);
doc.text ('Artículo', 45, 66.5);
doc.line (130, 63, 130, 68);
doc.text ('Cantidad', 136, 66.5);
doc.line (150, 63, 150, 68);
doc.text ('Precio', 159.5, 66.5);
doc.line (170, 63, 170, 68);
doc.text ('Subtotal', 186, 66.5);

doc.line (10, 68, pageWidth - 10, 68);


// tabla de articulos comprados

doc.setFont('helvetica', 'normal');
doc.text ('555',12, 72);
doc.text ('Articulo general',45, 72);
doc.text ('2.00',149, 72, { align: 'right' });
doc.text ('100.00',169, 72, { align: 'right' });
doc.text ('200.00',199, 72, { align: 'right' });

doc.text ('556',12, 77);
doc.text ('Articulo general',45, 77);
doc.text ('5.00',149, 77, { align: 'right' });
doc.text ('200.00',169, 77, { align: 'right' });
doc.text ('1000.00',199, 77, { align: 'right' });

doc.text ('557',12, 82);
doc.text ('Articulo general',45, 82);
doc.text ('10.00',149, 82, { align: 'right' });
doc.text ('2000.00',169, 82, { align: 'right' });
doc.text ('20000.00',199, 82, { align: 'right' });


/* INTENTO DE TABLA

doc.setFillColor(255,255,255);
doc.setDrawColor(0);
doc.setLineWidth(0);

var data = [['Nombre', 'Años', 'País'],
            ['John Doe', 25, 'USA'], 
            ['Jane Doe', 24, 'Canada']];
doc.table (10,10, data, 200, 100);
*/



// PIE DE PAGINA


doc.setFont('helvetica', 'normal');
doc.setFontSize(8);

doc.text ('CAE', 43, 230);
doc.text ('73074079431998', 58, 230);
doc.text ('Vto. CAE', 43, 235);
doc.text ('26/02/2023', 58, 235);

doc.setFont('helvetica', 'bold');
doc.text ('Comprobante autorizado', 61, 240);

doc.setFontSize(9);
doc.text ('Subtotal',120,228);
doc.text ('21200.00',195,228, { align: 'right' });
doc.text ('Total',120,245);
doc.text ('21200.00',195,245, { align: 'right' });

doc.line (10, 215, 200, 215 )
doc.line (100, 250, 100, 215)

doc.addImage("https://previews.123rf.com/images/vinntom/vinntom1202/vinntom120200028/12430323-c%C3%B3digo-qr.jpg", "jpg", 12,218,28,28);



/*   doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Prueba DAERAH AIR MINUM', pageWidth / 2, 16, {
    align: 'center',
  });
  doc.setFontSize(16);
  doc.text('TIRTA MAHAKAM', pageWidth / 2, 22, { align: 'center' });
  doc.setFontSize(14);
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
  doc.text('PURWANTO', pageWidth / 2, 230, { align: 'center' }); */


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
