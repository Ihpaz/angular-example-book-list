import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class GlobalService {
    private channels: { [key: string]: Subject<any>; } = {};
    
    book:any[]=[{name:'Zenius',year:'2020',review:[{email:'ihfazm@gmail.com',note:'Bagus',star:4}]}];
    ireview:number=0;

    constructor(){}

    addBook(book:object){
        this.book.push(book)
    }

    getBooks(){
        return this.book;
    }

    getBook(){
        console.log(this.book,this.ireview)
        return this.book[this.ireview];
    }

    addReview(review:object){
        this.book[this.ireview].review.push(review);
    }

   

    eventSubscribe(topic: string, observer: (_: any) => void): Subscription {
        if (!this.channels[topic]) {
            this.channels[topic] = new Subject<any>();
        }

        return this.channels[topic].subscribe(observer);
    }

    eventPublish(topic: string, data: any): void {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }

        subject.next(data);
    }

    eventDestroy(topic: string)  {
        const subject = this.channels[topic];
        if (!subject) {
           
        }

        subject.complete();
        delete this.channels[topic];
    }
}