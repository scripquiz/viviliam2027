import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Common components/directives will go here
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule
    // Any components declared above should be exported here
  ]
})
export class SharedModule { }