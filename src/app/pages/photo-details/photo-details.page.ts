import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.page.html',
  styleUrls: ['./photo-details.page.scss'],
})
export class PhotoDetailsPage implements OnInit {
  printerId: number;
  photography = {
    photography_desc: '',
    photography_id: '',
    photography_img: '',
    photography_price: '',
    photography_title: ''
  };
  constructor(private service: MyServiceService, private _router: Router, public loadingController: LoadingController, private _route: ActivatedRoute) { }


  ngOnInit() {
    this.printerId = +this._route.snapshot.params['id'];
    this.presentLoading().then(() => {
      this.service.getSinglePhoto(this.printerId).subscribe((res) => {
        this.photography = res.document;
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
