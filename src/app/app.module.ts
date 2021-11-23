import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { formComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { MyFormsComponent } from './my-forms/my-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    formComponent,
    MyFormsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
