import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  allProducts:any
  currentData:any
  constructor(private route: ActivatedRoute, private prod : RestService) {} 

  ngOnInit() {
    let id = this.route.snapshot.params["product_id"]
    this.getBook();
    this.allProducts.forEach((element: { id: any; }) => {
      if(element.id===id){
        this.currentData = element;
        console.log(element);
        
      }

    });
  }
  getBook(){
    this.prod.getData().subscribe(
      (res:any) => 
        {
          this.allProducts=res
        }
        )
    }

}
