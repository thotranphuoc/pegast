import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PegasService } from '../services/pegas.service';
@Component({
  selector: 'app-insurance-document',
  templateUrl: './insurance-document.page.html',
  styleUrls: ['./insurance-document.page.scss'],
})
export class InsuranceDocumentPage implements OnInit {
  pdfSrc: string = 'http://images1.cafef.vn/download/100518/lix-thong-bao-ngay-dkcc-tra-co-tuc-dot-2-nam-2017-bang-tien-mat.pdf';
  INSURANCES: any[] = [];
  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
    this.pegasService.insuranceGet('1','0')
    .subscribe((res: any)=>{
      this.INSURANCES = res.data;
      console.log(this.INSURANCES);
    })
  }

  open_pdf(ITEM){
    window.open(ITEM.file);
  }
  

}
