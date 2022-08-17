import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  currentId:any
  currentProduct:any
  allProducts:any
  constructor(private route: ActivatedRoute, private prod : RestService) {} 

  ngOnInit() {
    this.currentId = this.route.snapshot.params["product_id"]
    this.getBook();
    console.log(this.currentProduct)
    
    
  }
  getBook(){
    this.prod.getData().subscribe(
      (res:any) => 
        {
           res.forEach((element: { id: any; }) => {
            if(element["id"] === this.currentId){
               this.currentProduct = element
              
            }
            
           });
          
        }
        )
        this.getproduct();
    }
    getproduct(){
      this.prod.getData().subscribe(
        (res:any) => 
          {
            this.allProducts=res
          }
          )
      }
  

}
