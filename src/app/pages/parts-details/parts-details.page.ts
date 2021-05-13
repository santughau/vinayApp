import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-parts-details',
  templateUrl: './parts-details.page.html',
  styleUrls: ['./parts-details.page.scss'],
})
export class PartsDetailsPage implements OnInit {
  printerId: number;
  computerPart = {
    computerPart_desc: '',
    computerPart_id: '',
    computerPart_img: '',
    computerPart_price: '',
    computerPart_title: ''
  };
  constructor(private service: MyServiceService, private _router: Router, public loadingController: LoadingController, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.printerId = +this._route.snapshot.params['id'];
    this.presentLoading().then(() => {
      this.service.getSingleComputerParts(this.printerId).subscribe((res) => {
        this.computerPart = res.document;
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
