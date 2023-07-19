import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  book:any[]=[]

  constructor(
    private _globalService: GlobalService,
  ){

  }
  async ngOnInit(){
 
    await this._globalService.eventSubscribe(`loadBook`, async (isLoad: boolean) => {
      const dtbook = await this._globalService.getBooks() ;
      this.book =dtbook.length > 0 ? dtbook : this.book;
    })

    await this._globalService.eventPublish(`loadBook`,true);

    console.log(this.book,'asdas')
   
  }

  getReview(index:number){

    this._globalService.book=this.book;
    this._globalService.ireview=index;
    this._globalService.eventPublish(`loadReview`,true);

    return index;
  }
}
