import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserBooksService {
 data = [{

  userId: {
  id: 161720,
  firstName: "nada",
  lastName: "hisham",
  email: "ion@gmail.com",
  password:"1234567",
  isAdmin:"true",
  photo:"../.../assets/images/mm.jpg"
},
    books: [{  //books.bookId,id  , books.shelf
    bookId:
     {
          id: 123445,
          name:"hell",
          categoryId:"lhkjbkb",
          authorId:"lhkjbhvjhvjv",
          // averageRating: {
          //   type: Number,
          //   default: 0,
          // },
          cover:"../../assets/images/",
          numberOfRatings: 4,
          sumOfRatings: 11,
          description: "diegfxxxxfgf",
          reviews: [
            {
              userId:"lhkgjgj",
              review: "ohiugiugigigig",
            },
          ],
        },
      
    shelf: "Reading",
    rating:5,
    review:"",
    authorName:"hany"
},

{
  bookId:  {
      id: 123445,
      name:"hell",
      categoryId:"lhkjbkb",
      authorId:"lhkjbhvjhvjv",
      // averageRating: {
      //   type: Number,
      //   default: 0,
      // },
      cover:"../../assets/images/",
      numberOfRatings: 4,
      sumOfRatings: 11,
      description: "diegfxxxxfgf",
      reviews: [
        {
          userId:"lhkgjgj",
          review: "ohiugiugigigig",
        },
      ],
    },
  shelf: "want to read",
  rating:2,
  review:"",
  authorName:"hany"
},
{
  bookId:  {
      id: 123445,
      name:"hello",
      categoryId:"lhkjbkb",
      authorId:"lhkjbhvjhvjv",
      // averageRating: {
      //   type: Number,
      //   default: 0,
      // },
      cover:"../../assets/images/",
      numberOfRatings: 4,
      sumOfRatings: 11,
      description: "diegfxxxxfgf",
      reviews: [
        {
          userId:"lhkgjgj",
          review: "ohiugiugigigig",
        },
      ],
    },
  shelf: "Read",
  rating:3,
  review:"",
  authorName:"ahmed"
}]
}]
  constructor() {



   }

   getAllUserBooks(){

    return this.data;

   }
}
