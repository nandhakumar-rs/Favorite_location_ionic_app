webpackJsonp([3],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddplacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_modal_modal_controller__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setlocation_setlocation__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_placeService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddplacePage = (function () {
    function AddplacePage(navCtrl, navParams, openMapModal, mapLocation, load, alert, camera, service, file, status) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.openMapModal = openMapModal;
        this.mapLocation = mapLocation;
        this.load = load;
        this.alert = alert;
        this.camera = camera;
        this.service = service;
        this.file = file;
        this.status = status;
        this.locationPage = __WEBPACK_IMPORTED_MODULE_3__setlocation_setlocation__["a" /* SetlocationPage */];
        this.isLocationSelected = false;
        this.imgUrl = '';
        this.Location = {
            latitude: 11.0168,
            longitude: 76.9558
        };
        status.backgroundColorByHexString('#488aff');
    }
    AddplacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddplacePage');
    };
    AddplacePage.prototype.locateInMap = function () {
        var _this = this;
        var mapModel = this.openMapModal.create(this.locationPage, { location: this.Location, set: this.isLocationSelected });
        mapModel.present();
        mapModel.onDidDismiss(function (data) {
            if (data) {
                _this.Location = data.locate;
                _this.isLocationSelected = true;
            }
        });
    };
    AddplacePage.prototype.findMyLocation = function () {
        var _this = this;
        var l = this.load.create({
            content: "Detecting Location",
            duration: 10000
        });
        l.present();
        this.mapLocation.getCurrentPosition().then(function (location) {
            l.dismiss();
            _this.Location.latitude = location.coords.latitude,
                _this.Location.longitude = location.coords.longitude,
                _this.isLocationSelected = true;
        }).catch(function (error) {
            l.dismiss();
            var al = _this.alert.create({
                title: "Something went wrong",
                message: "Check your Internet Connection or Turn on yout Geolocation",
                buttons: ['Ok']
            });
            al.present();
        });
    };
    AddplacePage.prototype.openCamera = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        }).then(function (imgdata) {
            var name = imgdata.replace(/^.*[\\\/]/, '');
            var path = imgdata.replace(/[^\/]*$/, '');
            _this.file.moveFile(path, name, cordova.file.dataDirectory, name).then(function (data) {
                _this.imgUrl = data.nativeURL;
                _this.camera.cleanup();
            }).catch(function (err) {
                _this.imgUrl = '';
                var al = _this.alert.create({
                    title: "Something went wrong",
                    message: "Could not save image",
                    buttons: ['Ok']
                });
                al.present();
                _this.camera.cleanup();
            });
            _this.imgUrl = imgdata;
        }).catch(function (error) {
            var al = _this.alert.create({
                title: "Something went wrong",
                message: "Check whether your camera is working or not",
                buttons: ['Ok']
            });
            al.present();
        });
    };
    AddplacePage.prototype.add = function (form) {
        this.service.storePlace(form.value.title, form.value.description, this.Location, this.imgUrl);
        form.reset();
        this.isLocationSelected = false;
        this.imgUrl = '';
        this.Location = {
            latitude: 11.0168,
            longitude: 76.9558
        };
    };
    AddplacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addplace',template:/*ion-inline-start:"C:\Users\Anonymous\ionic_apps\place\src\pages\addplace\addplace.html"*/'<!--\n  Generated template for the AddplacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add New Place</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form #form="ngForm" (ngSubmit) = "add(form)" >\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Title</ion-label>\n      <ion-input required ngModel name="title" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea  ngModel name="description"></ion-textarea>\n      </ion-item>\n  </ion-list>\n <ion-grid>\n   <ion-row>\n     <ion-col>\n        <button block ion-button type="button" outline (click)="findMyLocation()">\n            Locate Me\n              </button>\n     </ion-col>\n     <ion-col>\n        <button block ion-button type="button" outline (click) = "locateInMap()">\n            Select on Map\n              </button>\n     </ion-col>\n   </ion-row>\n   <ion-row *ngIf="isLocationSelected">\n     <ion-col>\n        <agm-map [latitude]="Location.latitude" [longitude]="Location.longitude" [zoom]="16">\n            <agm-marker [latitude]="Location.latitude" [longitude]="Location.longitude">\n            \n            </agm-marker>\n                   </agm-map>\n     </ion-col>\n   </ion-row>\n   <ion-row >\n     <ion-col text-center>\n        <h3>Take a Photo...</h3>\n     </ion-col>\n   </ion-row>\n   <ion-row>\n     <ion-col>\n        <img [src] = "imgUrl">\n     </ion-col>\n   </ion-row>\n  \n   <ion-row>\n     <ion-col>\n        <button block ion-button type="button" outline (click)="openCamera() ">\n            Open Camera\n              </button>\n     </ion-col>\n   </ion-row>\n </ion-grid>\n<button ion-button block [disabled] = "!form.valid" type="submit">Add this Place</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Anonymous\ionic_apps\place\src\pages\addplace\addplace.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_modal_modal_controller__["a" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__service_placeService__["a" /* placeService */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */]])
    ], AddplacePage);
    return AddplacePage;
}());

//# sourceMappingURL=addplace.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_loacation__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SetlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetlocationPage = (function () {
    function SetlocationPage(navCtrl, navParams, sendByView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendByView = sendByView;
        this.defaultLocation = this.navParams.get('location');
        if (this.navParams.get('set')) {
            this.marker = this.defaultLocation;
        }
    }
    SetlocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetlocationPage');
    };
    SetlocationPage.prototype.placeMarker = function (event) {
        this.marker = new __WEBPACK_IMPORTED_MODULE_2__model_loacation__["a" /* locationModel */](event.coords.lat, event.coords.lng);
        console.log(this.marker);
    };
    SetlocationPage.prototype.addThisLocation = function () {
        this.sendByView.dismiss({
            locate: this.marker
        });
    };
    SetlocationPage.prototype.closeLocationChooser = function () {
        this.sendByView.dismiss();
    };
    SetlocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setlocation',template:/*ion-inline-start:"C:\Users\Anonymous\ionic_apps\place\src\pages\setlocation\setlocation.html"*/'<!--\n  Generated template for the SetlocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>setlocation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n       <agm-map (mapClick) = "placeMarker($event)" [latitude]="defaultLocation.latitude" [longitude]="defaultLocation.longitude" [zoom]="16">\n<agm-marker [latitude]="marker.latitude" [longitude]="marker.longitude" *ngIf="marker">\n\n</agm-marker>\n       </agm-map>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block outline color="secondary" (click)="addThisLocation()">\n          Save Location\n        </button>\n      </ion-col>\n      <ion-col>\n          <button ion-button block outline color="danger" (click)="closeLocationChooser()">\n            Abort\n          </button>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Anonymous\ionic_apps\place\src\pages\setlocation\setlocation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], SetlocationPage);
    return SetlocationPage;
}());

//# sourceMappingURL=setlocation.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_placeService__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlacePage = (function () {
    function PlacePage(navCtrl, navParams, view, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.service = service;
        this.place = this.navParams.get('place');
        this.index = this.navParams.get('index');
        console.log(this.place);
    }
    PlacePage.prototype.closeView = function () {
        this.view.dismiss();
    };
    PlacePage.prototype.deleteLocation = function () {
        this.view.dismiss();
        this.service.deletePlace(this.index);
    };
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place',template:/*ion-inline-start:"C:\Users\Anonymous\ionic_apps\place\src\pages\place\place.html"*/'<!--\n  Generated template for the PlacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <ion-title>{{place.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n        <img [src]="place.imgUrl">\n    </ion-col>\n  </ion-row>\n  <hr>\n  <ion-row>\n    <ion-col>\n      <h4>Description</h4>\n        <p>{{place.description}}</p>\n    </ion-col>\n  </ion-row>\n  <hr>\n  <ion-row>\n    <ion-col>\n        <h4>Location</h4>\n            <agm-map [latitude]="place.location.latitude" [longitude]="place.location.longitude" [zoom] = "16">\n              <agm-marker  [latitude]="place.location.latitude" [longitude]="place.location.longitude">\n        \n              </agm-marker>\n            </agm-map>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button outline block color="danger" (click)="deleteLocation()">\n        Delete\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col>\n        <button ion-button outline block color="dark" (click)="closeView()">\n          Close\n        </button>\n      </ion-col>\n    </ion-row>\n</ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Anonymous\ionic_apps\place\src\pages\place\place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__service_placeService__["a" /* placeService */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addplace/addplace.module": [
		309,
		2
	],
	"../pages/place/place.module": [
		310,
		1
	],
	"../pages/setlocation/setlocation.module": [
		311,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addplace_addplace__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_placeService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_place__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, service, model) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.model = model;
        this.places = [];
        this.addpage = __WEBPACK_IMPORTED_MODULE_2__addplace_addplace__["a" /* AddplacePage */];
        this.placeview = __WEBPACK_IMPORTED_MODULE_4__place_place__["a" /* PlacePage */];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.fetchdata().then(function (places) {
            _this.places = places;
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.places = this.service.getPlace();
    };
    HomePage.prototype.viewPlace = function (place, index) {
        var _this = this;
        var m = this.model.create(this.placeview, {
            place: place,
            index: index
        });
        m.present();
        m.onDidDismiss(function () {
            _this.places = _this.service.getPlace();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Anonymous\ionic_apps\place\src\pages\home\home.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <ion-title>\n      Favorite Locations\n    </ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only [navPush]="addpage"> \n        <ion-icon name="add" ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let place of places;let i = index" (click) = "viewPlace(place,i)">\n          <p>{{place.title}}</p>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Anonymous\ionic_apps\place\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__service_placeService__["a" /* placeService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_addplace_addplace__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_place_place__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_setlocation_setlocation__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_service_placeService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_addplace_addplace__["a" /* AddplacePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_place_place__["a" /* PlacePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_setlocation_setlocation__["a" /* SetlocationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addplace/addplace.module#AddplacePageModule', name: 'AddplacePage', segment: 'addplace', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setlocation/setlocation.module#SetlocationPageModule', name: 'SetlocationPage', segment: 'setlocation', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: ' AIzaSyB0U8nHukEVvXiR5Q-xj4u3yZ0mKHAS9Ls'
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_addplace_addplace__["a" /* AddplacePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_place_place__["a" /* PlacePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_setlocation_setlocation__["a" /* SetlocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__pages_service_placeService__["a" /* placeService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locationModel; });
var locationModel = (function () {
    function locationModel(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return locationModel;
}());

//# sourceMappingURL=loacation.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceModel; });
var PlaceModel = (function () {
    function PlaceModel(title, description, location, imgUrl) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.imgUrl = imgUrl;
    }
    return PlaceModel;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Anonymous\ionic_apps\place\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Anonymous\ionic_apps\place\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return placeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_place__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var placeService = (function () {
    function placeService(store, file) {
        this.store = store;
        this.file = file;
        this.places = [];
    }
    placeService.prototype.storePlace = function (title, description, location, imgUrl) {
        var _this = this;
        var place = new __WEBPACK_IMPORTED_MODULE_0__model_place__["a" /* PlaceModel */](title, description, location, imgUrl);
        this.places.push(place);
        this.store.set('places', this.places).then().catch(function (err) {
            _this.places.splice(_this.places.indexOf(place), 1);
        });
    };
    placeService.prototype.fetchdata = function () {
        var _this = this;
        return this.store.get('places').then(function (place) {
            _this.places = place != null ? place : [];
            return _this.places.slice();
        }).catch(function (err) {
            console.log(err);
        });
    };
    placeService.prototype.getPlace = function () {
        return this.places.slice();
    };
    placeService.prototype.deletePlace = function (index) {
        var _this = this;
        var place = this.places[index];
        this.places.splice(index, 1);
        this.store.set('places', this.places).then(function () {
            _this.removeimg(place);
        });
    };
    placeService.prototype.removeimg = function (place) {
        var _this = this;
        var name = place.imgUrl.replace(/^.*[\\\/]/, '');
        this.file.removeFile(cordova.file.dataDirectory, name).then(function () {
            console.log('sucess');
        }).catch(function () {
            console.log('error');
            _this.storePlace(place.title, place.description, place.location, place.imgUrl);
        });
    };
    placeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
    ], placeService);
    return placeService;
}());

//# sourceMappingURL=placeService.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map