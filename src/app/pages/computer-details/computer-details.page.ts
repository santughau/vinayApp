import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.page.html',
  styleUrls: ['./computer-details.page.scss'],
})
export class ComputerDetailsPage implements OnInit {
  printerId: number;
  computer = {
    computer_desc: '',
    computer_id: '',
    computer_img: '',
    computer_price: '',
    computer_title: ''
  };
  constructor(private service: MyServiceService, private _router: Router, public loadingController: LoadingController, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.printerId = +this._route.snapshot.params['id'];
    this.presentLoading().then(() => {
      this.service.getSingleComputer(this.printerId).subscribe((res) => {
        this.computer = res.document;
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
