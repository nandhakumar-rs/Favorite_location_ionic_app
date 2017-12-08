import { PlaceModel } from "../model/place";
import { locationModel } from "../model/loacation";
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import {File} from "@ionic-native/file"
declare var cordova:any;
@Injectable()
export class placeService{

private places:PlaceModel[] = []
constructor(private store:Storage,private file:File){

}
storePlace(title:string,description:string,location:locationModel,imgUrl:string)
{
     const place = new PlaceModel(title,description,location,imgUrl);
     this.places.push(place);
     this.store.set('places',this.places).then().catch(err=>{
         this.places.splice(this.places.indexOf(place),1);
     })
     
}
fetchdata(){
    return this.store.get('places').then((place:PlaceModel[])=>{
        this.places = place !=null ? place : [];
        return this.places.slice();
    }).catch(err=>{
        console.log(err)
    })
}
getPlace(){
    return this.places.slice()
}

deletePlace(index:number){
const place:PlaceModel = this.places[index]
this.places.splice(index,1)
this.store.set('places',this.places).then(
()=>{
    this.removeimg(place)
}
)
}

private removeimg(place:PlaceModel){
const name = place.imgUrl.replace(/^.*[\\\/]/,'') 
     this.file.removeFile(cordova.file.dataDirectory,name).then(()=>{
         console.log('sucess')
     }).catch(()=>{
         console.log('error')
         this.storePlace(place.title,place.description,place.location,place.imgUrl);
     })
}
}