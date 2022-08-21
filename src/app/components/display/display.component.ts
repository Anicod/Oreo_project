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
  currentImage:any
  miniImage:any

  constructor(private route: ActivatedRoute, private prod : RestService) {} 

  ngOnInit() {
    this.currentId = this.route.snapshot.params["product_id"]
    this.getBook();  
  }
  getBook(){
    this.prod.getData().subscribe(
      (res:any) => 
        {
           res.forEach((element: { id: any, image:any, miniImage:any }) => {
            if(element["id"] === this.currentId){  
               this.currentProduct = element
               this.currentImage = element["image"]
               this.miniImage = element["miniImage"]
            }
            
           });
          
        }
        )
    }
   
       cart(){
         alert("Added successfully")
         let data={
           "id" : this.currentProduct.id,
           "image" :this.currentProduct.image,
           "name" : this.currentProduct.name,
           "price": this.currentProduct.price,
           "discount": this.currentProduct.discount,
           "description": this.currentProduct.description,
           "Review": this.currentProduct.Review,
           "ratings":this.currentProduct.ratings,
           "miniImage":  this.currentProduct.miniImage,
           "ratingst":this.currentProduct.ratingst,
           "stock":this.currentProduct.stock,
           "update":this.currentProduct.update,
           "delete":this.currentProduct.delete
         }
         this.prod.addList(data).subscribe((res:any)=>{
          console.log(res)
        })
       }
      switchImageOne(){
        let temp = this.currentImage
        this.currentImage = this.miniImage[0]
        this.miniImage[0] = temp
      }
      switchImageTwo(){
        let temp = this.currentImage
        this.currentImage = this.miniImage[1]
        this.miniImage[1] = temp
      }
}
