import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-productlists',
  templateUrl: './productlists.component.html',
  styleUrls: ['./productlists.component.scss']
})
export class ProductlistsComponent implements OnInit {
  allProducts:any
  allList:any
  currentProduct:any
  data:any
  number:any

  constructor( private prod : RestService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getproduct();
  }
  openDialog(image:any, id:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      data:image
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed', result);
    });
  }
  getproduct(){
    this.prod.getCart().subscribe(
      (res:any) => 
        {
          this.allProducts=res
          this.data = this.allProducts

          
        }
        )  
    }
    
     deleteList( id:any) {
      this.prod .deleteProduct(id).subscribe();
      this.getproduct();
    }
    }
    
function data(data: any) {
  throw new Error('Function not implemented.');
}

