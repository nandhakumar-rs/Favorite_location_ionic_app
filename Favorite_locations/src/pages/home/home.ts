import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddplacePage } from '../addplace/addplace';
import { placeService } from '../service/placeService';
import { PlaceModel } from '../model/place';
import { PlacePage } from '../place/place';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit{
  places:PlaceModel[] = []  
addpage:any =AddplacePage
placeview:any = PlacePage
  constructor(public navCtrl: NavController,private service:placeService,private model:ModalController) {

  }
ngOnInit(){
  this.service.fetchdata().then((places:PlaceModel[])=>{
    this.places = places;
  })
}
  ionViewWillEnter(){
    this.places =  this.service.getPlace()
   }

   viewPlace(place:PlaceModel,index:number){
     const m = this.model.create(this.placeview,{
       place:place,
       index:index
     });
     m.present();
     m.onDidDismiss(()=>{
       this.places = this.service.getPlace();
     })

   }
}
