import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient:HttpClient) { }
  url : string = 'http://localhost:3000/products';
  link: string = 'http://localhost:3000/miniproducts'

  getService(url:string, httpoption:any){
    

    return this.httpClient.get(url, httpoption) 
  }
  postService(url:string, data:any, httpoption:any){
    return this.httpClient.post(url, data && httpoption )


  }
  getServiceMini(link:string, httpoption:any){
    return this.httpClient.get(link, httpoption)
  }

  getData(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
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
   return this.postService(this.url, data, header)
  }
  getMiniData(){
    let header = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
        
      })
    }
    return this.getServiceMini(this.link, header)
  }
}
