import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './newBook.component.html',
  styleUrls: ['./newBook.component.scss'],
  
})
export class newBookComponent {

  constructor(
    private _globalService: GlobalService,
  ){
    
  }

  name:string='';
  year:number=0;

  ngOnInit(){

  }

  async addBook(){

    if(this.name && this.year){
      let book={name:this.name,year:this.year,review:[]}
      await this._globalService.addBook(book);
      this._globalService.eventPublish(`loadBook`,true);
    }
      
  }
}
