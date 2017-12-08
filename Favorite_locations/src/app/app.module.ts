import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddplacePage } from '../pages/addplace/addplace';
import { PlacePage } from '../pages/place/place';
import { SetlocationPage } from '../pages/setlocation/setlocation';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import {Camera} from '@ionic-native/camera'
import { placeService } from '../pages/service/placeService';
import { IonicStorageModule } from '@ionic/storage';
import {File} from '@ionic-native/file'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddplacePage,
    PlacePage,
    SetlocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey:' AIzaSyB0U8nHukEVvXiR5Q-xj4u3yZ0mKHAS9Ls'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddplacePage,
    PlacePage,
    SetlocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera,
    placeService,
    File
    
  ]
})
export class AppModule {}
