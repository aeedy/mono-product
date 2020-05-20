import { Component } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public navCtrl: NavController) {}

  viewProductDetail(id)
  {
    this.navCtrl.navigateForward('/product-detail');
  }
}
