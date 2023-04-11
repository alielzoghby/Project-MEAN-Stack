import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserBooksService {
data = [
  {
      "books": [
          {
              "bookId": {
                  "averageRating": 0,
                  "numberOfRatings": 0,
                  "_id": "64274168329bc1119a1bcdcb",
                  "name": "The Adventures of Sherlock Holmes",
                  "categoryId": "6425e41c1239e0e71ad9dfbd",
                  "cover": "product-item1.jpg",
                  "reviews": [],
                  "id": 4,
                  "__v": 0
              },
              "shelf": "Read",
              "_id": "642dfc2f33b3aa8910559750",
              "rating": 2
          },
          {
              "bookId": {
                  "averageRating": 0,
                  "numberOfRatings": 0,
                  "_id": "64273d332125294507be1209",
                  "name": "Arsine Lupin",
                  "categoryId": "6425e41c1239e0e71ad9dfbd",
                  "reviews": [],
                  "id": 7,
                  "__v": 0
              },
              "shelf": "Reading",
              "_id": "642dfc5d33b3aa8910559755"
          },
          {
              "bookId": {
                  "averageRating": 0,
                  "_id": "6426fea121e7c5e9910f1da8",
                  "name": "The Adventures of Sherlock Holmes",
                  "categoryId": "6425e41c1239e0e71ad9dfbd",
                  "reviews": [],
                  "__v": 0,
                  "numberOfRatings": 1,
                  "id": 17
              },
              "shelf": "Want to read",
              "_id": "642f5570f61ee5f46b0ea139",
              "rating": 3
          }
      ]
  }
]
  constructor() {



   }

   getAllUserBooks(){

    return this.data;

   }
}
