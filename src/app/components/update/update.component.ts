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
  @Output() messageEvent = new EventEmitter<string>()
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private prod : RestService) { }

  ngOnInit(): void {
    this.imagea = this.data.miniImage[0]
    this.name = this.data.name
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  close(){
    let data={
           "id" : this.data.id,
           "image" :this.imagea,
           "name" : this.data.name,
           "price": this.data.price,
           "discount": this.data.discount,
           "description": this.data.description,
           "Review": this.data.Review,
           "ratings":this.data.ratings,
           "miniImage":  this.data.miniImage,
           "ratingst":this.data.ratingst,
           "stock":this.data.stock,
           "update":this.data.update,
           "remove":this.data.remove
         }
         this.deleteList(this.data.id);
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
