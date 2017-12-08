import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { SetlocationPage } from '../setlocation/setlocation';
import { locationModel } from '../model/loacation';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import {Camera} from '@ionic-native/camera'
import { placeService } from '../service/placeService';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {File,FileError,Entry} from '@ionic-native/file';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the AddplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova:any;
@IonicPage()
@Component({
  selector: 'page-addplace',
  templateUrl: 'addplace.html',
})
export class AddplacePage {
locationPage = SetlocationPage;
isLocationSelected = false;
imgUrl:string = '';
 public Location:locationModel = {
  latitude:11.0168,
  longitude:76.9558
}
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private openMapModal:ModalController,public mapLocation:Geolocation,
  private load :LoadingController,private alert:AlertController,
private camera:Camera,private service:placeService,private file:File,
private status:StatusBar) {
   status.backgroundColorByHexString('#488aff')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddplacePage');
  }

locateInMap(){
const mapModel = this.openMapModal.create(this.locationPage,{location:this.Location,set:this.isLocationSelected})
mapModel.present()
mapModel.onDidDismiss(data=>{
if(data){
this.Location = data.locate;
this.isLocationSelected = true;
}
})
}  

findMyLocation(){
  const l = this.load.create({
    content:"Detecting Location",
    duration:10000
  });
  l.present();
this.mapLocation.getCurrentPosition().then(location=>{
  l.dismiss();
this.Location.latitude = location.coords.latitude,
this.Location.longitude =  location.coords.longitude,
this.isLocationSelected = true
}).catch(error=>{
  l.dismiss();
  const al = this.alert.create({
    title:"Something went wrong",
    message:"Check your Internet Connection or Turn on yout Geolocation",
    buttons:['Ok']
    
  });
  al.present();
})
}

openCamera(){
this.camera.getPicture({
   quality:100,
   encodingType:this.camera.EncodingType.JPEG,
   correctOrientation:true
}).then(imgdata=>{
const name= imgdata.replace(/^.*[\\\/]/,'');
const path = imgdata.replace(/[^\/]*$/,'');
this.file.moveFile(path,name,cordova.file.dataDirectory,name).then((data:Entry)=>{
  this.imgUrl = data.nativeURL;
  this.camera.cleanup();
}).catch((err:FileError)=>{
  this.imgUrl = '';
  const al = this.alert.create({
    title:"Something went wrong",
    message:"Could not save image",
    buttons:['Ok']
  });
  al.present();
  this.camera.cleanup();
});
this.imgUrl = imgdata;
}).catch(error=>{
  const al = this.alert.create({
    title:"Something went wrong",
    message:"Check whether your camera is working or not",
    buttons:['Ok']
    
  });
  al.present();
})
}


add(form:NgForm){

this.service.storePlace(form.value.title,form.value.description,this.Location,this.imgUrl);
form.reset();
this.isLocationSelected = false;
this.imgUrl = '';
this.Location =  {
  latitude:11.0168,
  longitude:76.9558
}
}

}
