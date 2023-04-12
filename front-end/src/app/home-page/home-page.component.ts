import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

// declare let AOS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  popularBooks: any;
  categoerys: any;
  categoryBooks: any;
  authors: any;
  selectedIndex: number = -1;
  allQuote = [
    {
      quote:
        'The more that you read, the more things you will know. The more that you learn, the more places you’ll go',
      says: 'Dr. Seuss',
    },
    {
      quote:
        'A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only',
      says: 'George R.R. Martin',
    },
    {
      quote: 'Never trust anyone who has not brought a book with them.',
      says: 'Lemony Snicket',
    },
    {
      quote:
        'You can never get a cup of tea large enough or a book long enough to suit me.',
      says: 'C.S. Lewis',
    },
    {
      quote:
        'Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book',
      says: 'John Green',
    },
    {
      quote:
        'If one cannot enjoy reading a book over and over again, there is no use in reading it at all.',
      says: 'Oscar Wilde',
    },
  ];
  quote: any;
  imageBase = '../../../../back-end';

  constructor() {}

  getPopularBooks() {
    this.popularBooks = [
      {
        id: 1,
        name: 'Portrait photography',
        author: 'ali',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
      {
        id: 2,
        name: 'Portrait photography',
        author: 'samy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
      {
        id: 3,
        name: 'Portrait photography',
        author: 'nada',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
      {
        id: 4,
        name: 'Portrait photography',
        author: 'alaa',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
      {
        id: 5,
        name: 'Portrait photography',
        author: 'hager',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
      {
        id: 6,
        name: 'Portrait photography',
        author: 'mn',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
      {
        id: 7,
        name: 'Portrait photography',
        author: 'mona',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
      {
        id: 8,
        name: 'Portrait photography',
        author: 'samar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
      {
        id: 9,
        name: 'Portrait photography',
        author: 'hosam',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
      },
    ];
  }

  getAllCategores() {
    this.categoerys = [
      {
        _id: '64249f3f58ff0f1ee44e28da',
        name: 'science fiction',
        __v: 0,
        numberOfBooks: 6,
        id: 13,
      },
      {
        numberOfBooks: 0,
        _id: '64249f4758ff0f1ee44e28dc',
        name: 'Paranormal',
        __v: 0,
      },
      {
        _id: '6425e41c1239e0e71ad9dfbd',
        name: 'Crime',
        __v: 0,
        numberOfBooks: 3,
        id: 11,
      },
      {
        _id: '6425f9b05d26ee6953c545ef',
        name: 'Horror',
        __v: 0,
        numberOfBooks: 3,
        id: 11,
      },
    ];
  }

  getCategoryBooks(id: any) {
    console.log(id);
    this.categoryBooks = [
      {
        _id: '643187f26321613814c9e716',
        name: 'Fiction 15',
        categoryId: '643187aa6321613814c9e713',
        authorId: '642c75ea1374a6b0080bc18e',
        averageRating: 0,
        numberOfRatings: 0,
        reviews: [],
        __v: 0,
      },
      {
        _id: '643187ff6321613814c9e71a',
        name: 'kids 1',
        categoryId: '643187aa6321613814c9e713',
        authorId: '642c75ea1374a6b0080bc18e',
        averageRating: 0,
        numberOfRatings: 0,
        reviews: [],
        __v: 0,
      },
      {
        _id: '643188036321613814c9e71e',
        name: 'kids 2',
        categoryId: '643187aa6321613814c9e713',
        authorId: '642c75ea1374a6b0080bc18e',
        averageRating: 0,
        numberOfRatings: 0,
        reviews: [],
        __v: 0,
      },
      {
        _id: '643188076321613814c9e722',
        name: 'kids 3',
        categoryId: '643187aa6321613814c9e713',
        authorId: '642c75ea1374a6b0080bc18e',
        averageRating: 0,
        numberOfRatings: 0,
        reviews: [],
        __v: 0,
      },
    ];
  }

  getAllBooks() {
    this.categoryBooks = [
      {
        averageRating: 0,
        numberOfRatings: 0,
        _id: '6433f6ebcd5a5629b6cffeaf',
        name: 'The Adventures of Sherlock Holmes',
        category: 'history',
        cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
        reviews: [],
        author: 'Asdasdas',
        description: 'sadasdasdasdasdasdasdsadasd',
        __v: 0,
      },
      {
        averageRating: 0,
        numberOfRatings: 0,
        _id: '6433f6ebcd5a5629b6cffeaf',
        name: 'The Adventures of Sherlock Holmes',
        category: 'history',
        cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
        reviews: [],
        author: 'Asdasdas',
        description: 'sadasdasdasdasdasdasdsadasd',
        __v: 0,
      },
      {
        averageRating: 0,
        numberOfRatings: 0,
        _id: '6433f6ebcd5a5629b6cffeaf',
        name: 'The Adventures of Sherlock Holmes',
        category: 'history',
        cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
        reviews: [],
        author: 'Asdasdas',
        description: 'sadasdasdasdasdasdasdsadasd',
        __v: 0,
      },
      {
        averageRating: 0,
        numberOfRatings: 0,
        _id: '6433f6ebcd5a5629b6cffeaf',
        name: 'The Adventures of Sherlock Holmes',
        category: 'history',
        cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
        reviews: [],
        author: 'Asdasdas',
        description: 'sadasdasdasdasdasdasdsadasd',
        __v: 0,
      },
      {
        averageRating: 0,
        numberOfRatings: 0,
        _id: '6433f6ebcd5a5629b6cffeaf',
        name: 'The Adventures of Sherlock Holmes',
        category: 'history',
        cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
        reviews: [],
        author: 'Asdasdas',
        description: 'sadasdasdasdasdasdasdsadasd',
        __v: 0,
      },
    ];
  }

  getPopularAuthor() {
    this.authors = [
      {
        _id: 1,
        firstName: 'Ahmed',
        lastName: 'Ali',
        dateOfBirth: '1-1-1980',
      },
      {
        _id: 2,
        firstName: 'Ahmed',
        lastName: 'Ali',
        dateOfBirth: '1-1-1980',
      },
      {
        _id: 3,
        firstName: 'Ahmed',
        lastName: 'Ali',
        dateOfBirth: '1-1-1980',
      },
    ];
  }

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
    this.getAllCategores();
    this.getPopularBooks();
    this.getAllBooks();
    this.quote = this.allQuote[Math.floor(Math.random() * 6)];
    this.getPopularAuthor();
  }
}
