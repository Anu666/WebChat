import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './chat/chat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ChatComponent } from './chat/chat.component';
// import { DialogUserComponent } from './dialog-user/dialog-user.component';

@NgModule({
  declarations: [
    AppComponent,
    // ChatComponent,
    // DialogUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ChatModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
