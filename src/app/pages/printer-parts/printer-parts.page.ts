import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-printer-parts',
  templateUrl: './printer-parts.page.html',
  styleUrls: ['./printer-parts.page.scss'],
})
export class PrinterPartsPage implements OnInit {

  term;
  printersParts = [];

  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0
  };
  constructor(private service: MyServiceService, private _router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllPrinterParts().subscribe((res) => {
        this.printersParts = res.document.records;
        this.loadingController.dismiss();

      })
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
  }

  goToDetails(id) {
    this._router.navigate(['/printer-parts-details', id]);
  }

}
