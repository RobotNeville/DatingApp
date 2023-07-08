import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';



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

    FileUploadModule,
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
    FileUploadModule,
    //ToastrModule
  ]
})
export class SharedModule { }
