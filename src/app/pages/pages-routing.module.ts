import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { newBookComponent } from '../newBook/newBook.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BookReviewComponent } from '../book-review/book-review.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
    },
    {
        path: 'book',
        component: newBookComponent,
    },
    {
        path: 'booklist',
        component: BookListComponent,
    },
    {
        path: '',
        component: BookReviewComponent,
    },

    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
