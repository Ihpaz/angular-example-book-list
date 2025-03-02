import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent {

  email:string='';
  note:string='';
  star:number=0;
  bookReview:any;
  name='';

  constructor(
    private _globalService: GlobalService,
  ){

  }
  
  async ngOnInit(){
  //  await this._globalService.eventSubscribe(`loadReview`, async (isLoad: boolean) => {
  //     this.bookReview = await this._globalService.getBook();
  //   })

  //  await this._globalService.eventPublish(`loadReview`,true);
  //  console.log(this.bookReview,'asd')
  //  if(this.bookReview){
  //   this.name=this.bookReview.name;
  //  }

  this._globalService.getReviews().subscribe((review) => {
   
    this.bookReview = review;
    console.log(this.bookReview,'asdasd')
    this.name=this.bookReview; // Auto-update when books change
  });
  
   
  }


  async addReview(){

    if(this.email || this.note || this.star){
      let review={email:this.email,note:this.note,star:this.star}
      await this._globalService.addReview(review);
      this._globalService.eventPublish(`loadReview`,true);
    }
      
  }
}
