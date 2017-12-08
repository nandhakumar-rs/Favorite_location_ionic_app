import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlaceModel } from '../model/place';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { placeService } from '../service/placeService';


/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
place:PlaceModel;
index:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view:ViewController,private service:placeService) {
    this.place = this.navParams.get('place')
    this.index = this.navParams.get('index')
    console.log(this.place)
  }
closeView(){
  this.view.dismiss()
}

deleteLocation(){
this.view.dismiss()
this.service.deletePlace(this.index)

}
}
