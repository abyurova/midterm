import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents:[
    DetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
