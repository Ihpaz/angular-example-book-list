import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newBookComponent } from '../newBook/newBook.component';
import { MaterialModule } from '../material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from '../book-list/book-list.component';
import { BookReviewComponent } from '../book-review/book-review.component';
import { BarRatingModule } from "ngx-bar-rating";




@NgModule({
  declarations: [
    newBookComponent,
    BookListComponent,
    BookReviewComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    PagesRoutingModule,
    MatInputModule,
    MatFormFieldModule ,
    BarRatingModule
  ]
})
export class PagesModule { }
