import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient:HttpClient) { }
  url : string = 'http://localhost:3000/products';
  

  getService(url:string, httpoption:any){
    

    return this.httpClient.get(url, httpoption) 
  }
  postService(url:string, data:any, httpoption:any){
    return this.httpClient.post(url, data, httpoption )


  }
 
  getData(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    }
    return this.getService(this.url, header)

  }
  addList(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    }
   return this.postService('http://localhost:3000/cart', data, header)
  }
  getCart(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    }
    return this.getService('http://localhost:3000/cart', header)

  }
 
}
