import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-insurance-document',
  templateUrl: './insurance-document.page.html',
  styleUrls: ['./insurance-document.page.scss'],
})
export class InsuranceDocumentPage implements OnInit {
  pdfSrc: string = 'http://images1.cafef.vn/download/100518/lix-thong-bao-ngay-dkcc-tra-co-tuc-dot-2-nam-2017-bang-tien-mat.pdf';
  constructor() { }

  ngOnInit() {
  }

}
