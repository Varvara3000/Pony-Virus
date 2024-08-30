import {Component, ElementRef, ViewChild} from '@angular/core';
import {Pony} from "../interfaces/pony";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
color = 'olive'
changeColor(){

}

  number = ''
@ViewChild('appContentInput')  appContentInputTS: ElementRef;

  clickOnButton(){
this.number = this.appContentInputTS.nativeElement.value
  }
  constructor() {
    console.log('we are in constructor')
  }
  step = 'introduction'
  title = 'PonyVirus';

  chosenPony: Pony;
  direction:any;
  goToBack(step:string){
    this.step = step
  }
  changeStep(step: string){
    this.step = step
  }
  setChosenDirection(direction:any){
    this.direction = direction;
  }
  setChosenPony(pony: any){
    this.chosenPony = pony;
  }
}


function sayHello(person: {name: string, surname: string}) {
  console.log('Hi' + person.name + person.surname);
}

sayHello({name: 'varya', surname: 'nagulyak'});
sayHello({name: 'andrew', surname: 'nagulyak'})
