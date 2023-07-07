import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
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
    //ToastrModule
  ]
})
export class SharedModule { }
