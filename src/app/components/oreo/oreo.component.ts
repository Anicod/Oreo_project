
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-oreo',
  templateUrl: './oreo.component.html',
  styleUrls: ['./oreo.component.scss']
})
export class OreoComponent implements OnInit {
    allProducts:any = null
    

  constructor(private prod : RestService) { }
  
 

  ngOnInit(): void {
    this.getBook();
  }
  getBook(){
    this.prod.getData().subscribe(
      (res:any) => 
        {
          this.allProducts=res
        }
        )
    }
    searchText:string = ""
    
    onSearchTextEntered(searchValue:string){
      this.searchText = searchValue;
      console.log(this.searchText);
    }
    
  }
   


