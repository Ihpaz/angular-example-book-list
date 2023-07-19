import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { newBookComponent } from './newBook/newBook.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    PagesRoutingModule,
    MatInputModule,
    MatFormFieldModule ,
    BarRatingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
