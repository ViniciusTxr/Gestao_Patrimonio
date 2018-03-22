import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {DataTableModule, ButtonModule, InputMaskModule, CalendarModule, InputTextModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ItemService } from './item.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    DataTableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
