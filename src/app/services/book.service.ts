import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService{
    baseUrl : string;
  constructor(private http: Http){
    this.http = http;
    this.baseUrl = 'http://localhost:8101';
    console.log('BookService Started....')
  }

headers:string;
id:number;

  getBooks(){
    return this.http.get('http://localhost:8101/api/books').map(res => res.json());
}

removeBook(id: number){
  return this.http.delete('http://localhost:8101/api/book/'+ id).map(res => res.json());
  }
  addBook(newBook: any){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8101/api/books', JSON.stringify(newBook),{headers: headers})
      .map(res => res.json());
  }
  findBook(id :number){
   return this.http.get('http://localhost:8101/api/book/' + id).map(res => res.json());
    
    
  }
}