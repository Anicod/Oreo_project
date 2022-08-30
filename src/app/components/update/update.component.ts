import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  imagea:any
  name:any
  Detail:any
  Amount:any
  Stock:any
  @Output() messageEvent = new EventEmitter<string>()
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private prod : RestService) { }

  ngOnInit(): void {
    this.imagea = this.data.miniImage[0]
    this.name = this.data.name
    this.Detail = this.data.description
    this.Amount = this.data.price
    this.Stock = this.data.stock
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  close(){
    this.deleteList(this.data.id);
    let data={
           "id" : this.data.id,
           "image" :this.imagea,
           "name" : this.data.name,
           "price": this.Amount,
           "discount": this.data.discount,
           "description": this.Detail,
           "Review": this.data.Review,
           "ratings":this.data.ratings,
           "miniImage":  this.data.miniImage,
           "ratingst":this.data.ratingst,
           "stock":this.Stock,
           "update":this.data.update,
           "remove":this.data.remove
         }
         this.prod.addList(data).subscribe((res:any)=>{
         console.log(res)
         this.messageEvent.emit()
      })
    // this.prod.updateCart(data).subscribe((res:any) =>
    // {
    //   console.log(res)
    // }
    // )
    
  }
  deleteList( id:any) {
    this.prod .deleteProduct(id).subscribe();
  }

}
