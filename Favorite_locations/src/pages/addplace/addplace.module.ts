import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddplacePage } from './addplace';

@NgModule({
  declarations: [
    AddplacePage,
  ],
  imports: [
    IonicPageModule.forChild(AddplacePage),
  ],
})
export class AddplacePageModule {}
