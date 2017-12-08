import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { locationModel } from '../model/loacation';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the SetlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setlocation',
  templateUrl: 'setlocation.html',
})
export class SetlocationPage {
defaultLocation:locationModel;
marker:locationModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,private sendByView:ViewController) {
    this.defaultLocation = this.navParams.get('location')
    if(this.navParams.get('set')){
      this.marker = this.defaultLocation
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetlocationPage');
  }

  placeMarker(event:any){
    
this.marker = new locationModel(event.coords.lat,event.coords.lng);
console.log(this.marker)
  }
  addThisLocation(){
    this.sendByView.dismiss({
      locate:this.marker
    });
  }
  closeLocationChooser(){
    this.sendByView.dismiss();
  }
}
