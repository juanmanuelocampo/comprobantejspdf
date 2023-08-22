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
  rotation: number = 0;

  
  Actualizar(){
    const doc = this.documento;
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    console.log(pageHeight + ',' + pageWidth);


    const venta: any = {
      id: 1,      
      letra: 'B',
      ptovta: 2,
      nrocom: 3,
      nombrecliente: 'Marcelo Negroni',
      descripcion: "bien1",
      cantidad: 1,
      preciounit: 0,
      subtotal: 0,
      iva: 0,
      aliiva: 21,
      ventaId: 21,
      bienId: "1",
      bien: {
          id: "1",
          nombre: "Papas",
          precioiva: 100,
          stock: 0
      }
  };

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
//`VentaId:${venta.id}`
//doc.text ('C',  100, 14.5, { align: 'center' });
doc.text (venta.letra,  100, 14.5, { align: 'center' });
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

doc.text ('0004', 150, 24);
//{{ numberValue | number:'3.0-0' }}
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

doc.text ('0001 - Consumidor Final:', 37, 50);
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



doc.addPage ("a4", "landscape");

doc.setFont('helvetica', 'bold');
doc.setLineWidth(0.5);
doc.line (10,5, 285, 5);
doc.line (10,200, 285, 200);
doc.line (10,5, pageWidth - 200, 200);
doc.line (285, 5, 285, 200) ;

var x = 10;
var y = 10;

// ENCABEZADO Y MARCO 

doc.setFont('helvetica', 'bold');
doc.setFontSize (8);
doc.text('Empresa', 12, 15);
doc.text('Mario Nigro', 33, 15);
doc.text('Fecha Desde 01/01/23', 114, 28);
doc.text('Fecha Hasta 08/08/23', 144, 28);
doc.setFontSize (12);
doc.text('Libro IVA Ventas', 142.5, 22, { align: 'center'});

// DESCRIPCION

doc.setFontSize (8);
doc.text('Nª Comprob.', 12, 38);
doc.text('Fecha', 33, 38);
doc.text('Cliente.', 50, 38);
doc.text('Sit. IVA', 97, 38);
doc.text('CUIT', 120, 38);
doc.text('Gravado', 155, 38, { align: 'right'} );
doc.text('Exento', 165, 38);
doc.text('IVA 10.5', 190, 38, { align: 'right'} ) ; 
doc.text('IVA 21', 210, 38, { align: 'right'} );
doc.text('IVA 27', 230, 38, { align: 'right'} );
doc.text('Total', 250, 38, { align: 'right'} );
doc.text('Provincia', 254, 38);

// CUERPO

doc.setFontSize (7);
doc.text('FCC-04-00001', 12, 43);
doc.text('16/02/2023', 33, 43);
doc.text('Juan Manuel El Ninin Ocampo', 50, 43);
doc.text('Cons. Final', 97, 43);
doc.text('00-00000000-0', 120, 43);
doc.text('0.83', 155, 43, { align: 'right'});
doc.text('-', 165, 43);
doc.text('-', 190, 43, { align: 'right'});
doc.text('0.17', 210, 43, { align: 'right'});
doc.text('-', 230, 43, { align: 'right'});
doc.text('1.00', 250, 43, { align: 'right'});
doc.text('CBA', 254, 43);

doc.text('FCC-04-00002', 12, 48);
doc.text('16/02/2023', 33, 48);
doc.text('Juan Manuel El Ninin Ocampo', 50, 48);
doc.text('Responsable Insc.', 97, 48);
doc.text('00-00000000-0', 120, 48);
doc.text('200.00', 155, 48, { align: 'right'});
doc.text('-', 165, 48);
doc.text('-', 190, 48, { align: 'right'});
doc.text('42.00', 210, 48, { align: 'right'});
doc.text('-', 230, 48, { align: 'right'});
doc.text('242.00', 250, 48, { align: 'right'});
doc.text('TIERRA DEL FUEGO', 254, 48);

doc.text('FCC-04-00003', 12, 53);
doc.text('16/02/2023', 33, 53);
doc.text('Juan Manuel El Ninin Ocampo', 50, 53);
doc.text('Monotibutista', 97, 53);
doc.text('00-00000000-0', 120, 53);
doc.text('10000.00', 155, 53, { align: 'right'});
doc.text('-', 165, 53);
doc.text('-', 190, 53, { align: 'right'});
doc.text('2100.00', 210, 53, { align: 'right'});
doc.text('-', 230, 53, { align: 'right'});
doc.text('12100.00', 250, 53, { align: 'right'});
doc.text('SANTIAGO DEL ESTERO', 254, 53);

// FINAL

doc.setFontSize (9);
doc.text('TOTALES', 12, 68);
doc.setFontSize (7);
doc.text('Gravado', 12, 73);
doc.text('No Gravado', 12, 78);
doc.text('IVA 21 %', 97, 73);
doc.text('IVA 10.5 %', 97, 78);
doc.text('Total', 200, 73);

doc.setFontSize (8);
doc.text('10200.83', 65, 73, { align: 'right'} );
doc.text('0.00', 65, 78, { align: 'right'} );
doc.text('2142.17', 155, 73, { align: 'right'} );
doc.text('0.00', 155, 78, { align: 'right'} );
doc.text('12343.00', 230, 73, { align: 'right'} );


/*
// MARCO 

doc.text('Original', 100, 8, { align: 'center' });
doc.setLineWidth(0.5);
doc.line (10,5, pageWidth - 10, 5);
doc.line (10,9, pageWidth - 10, 9);
doc.line (10,250, pageWidth - 10, 250);
doc.line (10,5, pageWidth - 200, 250);
doc.line (pageWidth - 10, 5, pageWidth - 10, 250) ;
*/

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