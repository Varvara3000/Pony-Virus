import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Pony} from "../../interfaces/pony";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnChanges {
  ponies: Pony[] = [{
    img: './assets/TwilightSparkle.jpg',
    name: 'Твайлайт Спаркл', characteristics: ['Здоровье - 100%', 'Заражение - 0%', 'Рассудок - 100%', 'Голод - 0%'],
    id: '0',dialog:'Святая Селестия! Здесь явно происходит что то ужасное,пойдем Спайк! Нужно найти наших друзей и ' +
      'предупредить принцесс...Но куда же нам отправиться для начала?'
  },
    {
      img: './assets/AppleJack.jpg',
      name: 'Эппл Джек', characteristics: ['Здоровье - 100%', 'Заражение - 0%', 'Рассудок - 100%', 'Голод - 0%'],
      id: '1',dialog:'Ох,сахарок...Не знаю,что и думать...Моя семья пока в безопасности,но нужно найти моих друзей,вдруг им нужна помощь..' +
        'С чего же начать...'
    },
    {
      img: './assets/Fluttershy.jpg',
      name: 'Флаттершай', characteristics: ['Здоровье - 100%', 'Заражение - 0%', 'Рассудок - 100%', 'Голод - 0%'],
      id: '2',dialog:'-Ох..Эм...Привет...я..я Флаттершай..Кажется в моем домике больше не безопасно оставаться...\n' +
        '    Давай возьмем Энжела и отправимся искать наших друзей...Но только сперва нужно решить куда же нам идти...'
    },
    {
      img: './assets/PinkiePie.jpg',
      name: 'Пинки Пай', characteristics: ['Здоровье - 100%', 'Заражение - 0%', 'Рассудок - 100%', 'Голод - 0%'],
      id: '3',dialog:'УУууУУУУуууууууУУУУ намечается большая зомби-вечеринка??? Может все наши друзья уже там?? Определенно нужно их найти,но куда же мне идти?'
    },
    {
      img: './assets/RainbowDash.jpg',
      name: 'Рейнбоу Дэш', characteristics: ['Здоровье - 100%', 'Заражение - 0%', 'Рассудок - 100%', 'Голод - 0%'],
      id: '4',dialog:'Происходит что то странное...Я должна с этим разобраться,может Твайлайт в курсе дела? Нужно её найти,' +
        'но куда отправиться??'
    },
    {
      img: './assets/Rarity.jpg',
      name: 'Рэрити', characteristics: ['Здоровье - 100%', 'Заражение - 0%', 'Рассудок - 100%', 'Голод - 0%'],
      id: '5',dialog:'Ох,дорогуша...Я не понимаю,что происходит,но мне явно это не по душе...Нужно найти остальных,' +
        'но сперва нужно решить куда отправиться,что бы я подобрала правильный гардероб.....'
    }
  ]
  chosenPony:Pony;
  @Output() weChosedPony = new EventEmitter()
  @Output() charactersButtonClicked = new EventEmitter()
  next(){
    this.charactersButtonClicked.emit()
    this.weChosedPony.emit(this.chosenPony)
  }
  chosedPony(pony: any) {
    this.chosenPony = pony;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


}
