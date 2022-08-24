import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-productlists',
  templateUrl: './productlists.component.html',
  styleUrls: ['./productlists.component.scss']
})
export class ProductlistsComponent implements OnInit {
  allProducts:any
  allList:any
  currentProduct:any

  constructor( private prod : RestService) { }

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct(){
    this.prod.getCart().subscribe(
      (res:any) => 
        {
          this.allProducts=res
        }
        )  
    }
    
     deleteList( id:any) {
      this.prod .deleteProduct(id).subscribe();
      
    }
   
    }
    
