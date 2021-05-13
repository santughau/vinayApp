import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-xerox-details',
  templateUrl: './xerox-details.page.html',
  styleUrls: ['./xerox-details.page.scss'],
})
export class XeroxDetailsPage implements OnInit {
  printerId: number;
  xerox = {
    xerox_desc: '',
    xerox_id: '',
    xerox_img: '',
    xerox_price: '',
    xerox_title: ''
  };
  constructor(private service: MyServiceService, private _router: Router, public loadingController: LoadingController, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.printerId = +this._route.snapshot.params['id'];
    this.presentLoading().then(() => {
      this.service.getSingleXerox(this.printerId).subscribe((res) => {
        this.xerox = res.document;
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
