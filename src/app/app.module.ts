import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateBooksComponent } from './components/main-components/add-update-books/add-update-books.component';
import { FavroiteBooksComponent } from './components/main-components/favroite-books/favroite-books.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/main-components/dashboard/dashboard.component';
import { NavbarComponent } from './components/shared/common-components/navbar/navbar.component';
import { OnlyNumbersDirective } from './components/shared/directives/only-number-directive';
import { OnlyAlphabetsDirective } from './components/shared/directives/only-alphabets-directive'
import { OnlyAlphabetsAndNumbersDirective } from './components/shared/directives/only_alphabets_&_numbers';
import { OnlyNumberWithDecimalDirective } from './components/shared/directives/only_number_with_single_decimal.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUpdateBooksComponent,
    FavroiteBooksComponent,
    DashboardComponent,
    NavbarComponent,
    OnlyNumbersDirective,
    OnlyAlphabetsDirective,
    OnlyAlphabetsAndNumbersDirective,
    OnlyNumberWithDecimalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module

    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),// ToastrModule added
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
