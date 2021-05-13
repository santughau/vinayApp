import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.page.html',
  styleUrls: ['./laptop-details.page.scss'],
})
export class LaptopDetailsPage implements OnInit {
  printerId: number;
  laptop = {
    laptop_desc: '',
    laptop_id: '',
    laptop_img: '',
    laptop_price: '',
    laptop_title: ''
  };
  constructor(private service: MyServiceService, private _router: Router, public loadingController: LoadingController, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.printerId = +this._route.snapshot.params['id'];
    this.presentLoading().then(() => {
      this.service.getSingleLaptop(this.printerId).subscribe((res) => {
        this.laptop = res.document;
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
