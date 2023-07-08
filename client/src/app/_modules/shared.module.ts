import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    NgxSpinnerModule.forRoot({

      type:'pacman'
    }),
    // ToastrModule.forRoot({
    //   timeOut:15000,
    //   closeButton:true,
    //   progressBar:true,
    // }),

  ],

  exports:[

    BsDropdownModule,
    TabsModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    //ToastrModule
  ]
})
export class SharedModule { }
