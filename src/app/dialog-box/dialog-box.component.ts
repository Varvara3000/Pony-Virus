import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Pony} from "../../interfaces/pony";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
 @Output() dialogBoxButtonClicked = new EventEmitter()
  @Input() img:string
  @Input() dialog:string
  showImage = false;
  back(){
    this.dialogBoxButtonClicked.emit()
  }

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.showImage= true;
    }, 15)
  }


}
