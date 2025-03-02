import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, Subscription,map } from "rxjs";


    @Injectable({
        providedIn: "root",
    })
    export class GlobalService {
        private channels: { [key: string]: Subject<any> } = {};
    
        // Use BehaviorSubject to store books so UI updates automatically
        private booksSubject = new BehaviorSubject<any[]>([
            {
                name: "Zenius",
                year: "2020",
                review: [{ email: "ihfazm@gmail.com", note: "Bagus", star: 4 }]
            }
        ]);
        private selectedReviewIndex = new BehaviorSubject<number>(0); 
    
        private ireview: number = 0;
    
        constructor() {}
    
        // Add book and notify subscribers
        addBook(book: object) {
            const currentBooks = this.booksSubject.value;
            this.booksSubject.next([...currentBooks, book]); // Update state
        }
    
        // Get books as Observable (UI will auto-update when new book is added)
        getBooks(): Observable<any[]> {
            return this.booksSubject.asObservable();
        }
    
        // Get a single book
        getBook(): any {
            const books = this.booksSubject.value;
            return books[this.ireview];
        }
    
        // Add a review and notify subscribers
        addReview(review: object) {
            const books = this.booksSubject.value;
            books[this.selectedReviewIndex.value].review.push(review);
            this.booksSubject.next([...books]); // Update state
        }

       // Track selected book index
  




        getSelectedBook(): Observable<any> {
            return this.selectedReviewIndex.asObservable().pipe(
                map((index: number) => this.booksSubject.value[index])
            );
        }

        getReviews(): Observable<any[]> {
            return this.selectedReviewIndex.asObservable().pipe(
            map(index => this.booksSubject.value[index] || [])
            );
        }

        setReviewIndex(index: number) {
            this.selectedReviewIndex.next(index);
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