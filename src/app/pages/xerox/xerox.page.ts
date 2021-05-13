import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-xerox',
  templateUrl: './xerox.page.html',
  styleUrls: ['./xerox.page.scss'],
})
export class XeroxPage implements OnInit {

  data = [];
  term;

  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0
  };
  constructor(private _router: Router, private service: MyServiceService, public loadingController: LoadingController, public toastController: ToastController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllXerox().subscribe((res) => {
        this.data = res.document.records;
        this.loadingController.dismiss();
      })
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Please wait...",
    });
    await loading.present();
  }

  goToDetails(id) {
    this._router.navigate(['/xerox-details', id]);
  }

}
