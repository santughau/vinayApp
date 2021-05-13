import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-printer',
  templateUrl: './printer.page.html',
  styleUrls: ['./printer.page.scss'],
})
export class PrinterPage implements OnInit {
  term;
  printersList = [];

  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0
  };
  constructor(private service: MyServiceService, private _router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllPrinters().subscribe((res) => {
        this.printersList = res.document.records;
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
    this._router.navigate(['/printer-details', id]);
  }

}
