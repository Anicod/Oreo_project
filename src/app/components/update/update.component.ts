import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  imagea:any
  imageb:any
  id:any
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private prod : RestService) { }

  ngOnInit(): void {
    this.imagea = this.data[0],
    this.imageb = this.data[1]
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  close(){
    let data = {
      id:this.id,
      imagef:this.imagea,
      images:this.imageb

    }
    this.prod.updateProd(data).subscribe((res:any)=>{
      console.log(res)
      })
    
  }

}
