import {Component, Input, OnInit} from '@angular/core';
import {Pony} from "../../../interfaces/pony";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() pony: Pony
    @Input() chosenPony : Pony
  constructor() {
  }

  ngOnInit(): void {
  }

}
