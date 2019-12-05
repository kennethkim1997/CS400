import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormFieldWithValidationComponent } from './form-field-with-validation/form-field-with-validation.component';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FormFieldWithValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
