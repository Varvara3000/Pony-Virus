import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pony} from "../../interfaces/pony";
import {Direction} from "../../interfaces/direction";
import {DirectionComponent} from "../direction/direction.component";

@Component({
  selector: 'app-direction-detail',
  templateUrl: './direction-detail.component.html',
  styleUrls: ['./direction-detail.component.scss']
})
export class DirectionDetailComponent implements OnInit {

  @Output() goBackButtonInDialogBox = new EventEmitter()
  @Input() chosenPony: Pony;
  @Input() direction: Direction;


  back(){
    this.goBackButtonInDialogBox.emit()
  }
  ngOnInit(): void {
  }


  getTextByDirectionPony(): string {


    const foundDialog = this.direction.dialog.find(el => el.ponyId === this.chosenPony.id)


    return foundDialog?.text || '';
  }

}
