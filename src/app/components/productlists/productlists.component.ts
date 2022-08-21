import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-productlists',
  templateUrl: './productlists.component.html',
  styleUrls: ['./productlists.component.scss']
})
export class ProductlistsComponent implements OnInit {
  allProducts:any
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

}
