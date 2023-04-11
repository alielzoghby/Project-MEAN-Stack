import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
data  = [
  {
    _id: 1,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
    photo:"../../assets/images/team-member7.jpg"
  },
  {
    _id: 2,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
    photo:"../../assets/images/team-member5.jpg"
  },
  {
    _id: 3,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
    photo:"../../assets/images/team-member5.jpg"
  },
  {
    _id: 4,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
    photo:"../../assets/images/team-member7.jpg"
  },
  {
    _id: 5,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
    photo:"../../assets/images/team-member5.jpg"
  },
  {
    _id: 6,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
    photo:"../../assets/images/team-1.jpg"
  },
  {
    _id: 7,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
  },
  {
    _id: 8,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
  },
  {
    _id: 9,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
  },
  {
    _id: 10,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
  },
  {
    _id: 11,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
  },
  {
    _id: 12,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
  },
  {
    _id: 13,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
  },
  {
    _id: 14,
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1-1-1980',
  }
];



httpUrl:string="http://localhost:3000/authors/"
  constructor(private httpclient :HttpClient) { }

getAllAuthors(){

  // return (this.httpclient.get(this.httpUrl+"getAuthors"))

    return this.data

  }

getAuthorById(id:number){

}

updateAuthor(){

}

deleteAuthor(){


}

}
