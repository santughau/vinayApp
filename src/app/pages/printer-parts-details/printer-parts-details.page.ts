import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-printer-parts-details',
  templateUrl: './printer-parts-details.page.html',
  styleUrls: ['./printer-parts-details.page.scss'],
})
export class PrinterPartsDetailsPage implements OnInit {
  printerId: number;
  printerParts = {
    printerParts_desc: '',
    printerParts_id: '',
    printerParts_img: '',
    printerParts_price: '',
    printerParts_title: ''
  };
  constructor(private service: MyServiceService, private _router: Router, public loadingController: LoadingController, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.printerId = +this._route.snapshot.params['id'];
    this.presentLoading().then(() => {
      this.service.getSinglePrinterParts(this.printerId).subscribe((res) => {
        this.printerParts = res.document;
        this.loadingController.dismiss();
      })
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'कृपया  थोडा वेळ वाट पहा आम्ही सर्वर वरून डेटा तुमच्या करिता  घेऊन येत आहोत .... ',
    });
    await loading.present();
  }

}
