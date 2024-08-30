import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Pony} from "../../interfaces/pony";
import {Direction} from "../../interfaces/direction";

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {


  directions: Direction[] = [{
    img: './assets/Ponyville.jpg',
    text: 'Понивилль',
    id: '0',
    dialog: [{text: 'Как здесь тихо..Мне это не нравится.Спайк!Пиши письмо принцессе Селестии', ponyId: '0'},
      {text: 'ЭЙ!!!Есть здесь кто нибудь??ОТЗОВИТЕСЬ ПОНИ!! это все очень странно...', ponyId: '1'},
      {text: 'Ох...Энджел......Почему здесь так пусто.....АХ! ты слышал??? Там какой то шорох?????', ponyId: '2'},
      {text: 'ХМММ.....Никого нет...Может все решили устроить мне вечеринку-сюрприз???', ponyId: '3'},
      {
        text: 'Странно...Наблюдая из Клаудсдейла в Понивилле происходило нечто странное,а теперь никого нет...',
        ponyId: '4'
      },
      {
        text: 'Ммм....В этом городе осталась хоть одна пони?? Перед кем же мне хвастаться своим "постапокалипстическим" нарядом??',
        ponyId: '5'
      }]
  },
    {
      img: './assets/Canterlot.jpg',
      text: 'Кантерлот',
      id: '1',
      dialog: [{
        text: 'Боже мой!!!!Что происходит???? Почему пони бросаются друг на друга!?? Где принцессы???',
        ponyId: '0'
      },
        {
          text: 'Спелые яблоки!!!Да что нашло на всех пони???Почему они друг на друга кидаются???? *оттдалкивает копытом пони,которая хотела её укусить*',
          ponyId: '1'
        },
        {
          text: 'М..мамочки,Энжел....Бежим в замок принцесс ,скорее!! Тут все обезумели и кидаются друг на друга...АААААА!!!*уклонилась от нападающей пони* -Энжел,скорее!!!',
          ponyId: '2'
        },
        {
          text: 'ООО,так вот где все пониии)) ПРИВЕТИК ВСЕМ!!! *все обратили внимание на Пинки и даже зараженные пони* - о-оу...кажется..кажется нужно бежаааать!!!!!',
          ponyId: '3'
        },
        {
          text: 'Черт!Да что здесь происходит?!!! Почему пони кидаются друг на друга?!!!Нужно долететь в замок принцесс,может Твайлайт уже там...',
          ponyId: '4'
        },
        {
          text: 'Ой мамочки,что это на всех нашло? *зараженная пони начинает грызть кусок ткани костюма Рарити,ткань рвется и РАрити убегает* -НУ что за манеры???',
          ponyId: '5'
        }]
    },
    {
      img: './assets/Cloudsdale.jpg', text: 'Клаудсдейл', id: '2', dialog: [{text: '...', ponyId: '0'},
        {text: '...', ponyId: '1'},
        {text: '...', ponyId: '2'},
        {text: '...', ponyId: '3'},
        {text: '...', ponyId: '4'},
        {text: '...', ponyId: '5'}]
    },
    {
      img: './assets/Sweet_Apple_Acres.jpg',
      text: 'Ферма "Сладкое Яблоко"',
      id: '3',
      dialog: [{
        text: 'На ферме ЭпплДжек как всегда спокойно.Но Спайк,это что там семья Эпплов отбиваются от пони?..',
        ponyId: '0'
      },
        {text: 'ИТАК ВСЕ ПОНИ,ДЕРЖИМ СТРОЙ ,НЕ ПОДПУСТИМ ЭТИХ УПЫРЕЙ К НАШИМ ЯБЛОЧКАМ!!!', ponyId: '1'},
        {
          text: 'м...Эпплджек?....Рарити...? Кто нибудь?,..АХХХХХ!!! *Флаттершай испугалась пролетевшей фруктовой летучей мыши*-Фуф...Энджел,нам нужно поскорее кого нибудь найти....',
          ponyId: '2'
        },
        {
          text: 'Ля-ля-ля..*идет в припрыжку*-Где же ЭпплДжек?..*Увидела,что ЭпллДжек и её семья отбиваются от зомби-пони* - ЭпллДжек!!! Бегу на помощь!!! ',
          ponyId: '3'
        },
        {
          text: '*Увидела,что ЭпллДжек и её семья отбиваются от зомби-пони* -охохо...А вот и мой выход,сейчас получите!!!!',
          ponyId: '4'
        },
        {
          text: 'ЭпплДжек! Дорогая! Ты дома? В Понивилле твориться что то странное....ЭпллДжек!!*Увидела,что ЭпллДжек и её семья отбиваются от зомби-пони*-О нет дорогая! Рарити уже идет!!',
          ponyId: '5'
        }]
    },
    {
      img: './assets/Evergreen_Forest.jpg',
      text: 'Вечнозеленый Лес',
      id: '4',
      dialog: [{
        text: 'Может это и была плохая идея идти в ВечноЗеленый лес,но я уверенна,Спайк - в Замке Двух Принцесс мы точно найдем ответы...',
        ponyId: '0'
      },
        {
          text: 'Святая Селестия....И почему я решила идти искать моих друзей в ВечноЗеленом лесу...Что ж,может они пересижывают в Замке Двух Принцесс.....',
          ponyId: '1'
        },
        {
          text: 'Что ж.....Энжел.....В Понивилль я забоялась идти,но здесь оказалось страшнее....*слышно шорохи вокруг* ООХХХ!!! Энжел,нужно бежать в Замок Двух Принцесс!Скорее!',
          ponyId: '2'
        },
        {
          text: 'Я уверенна,что найду всех моих друзей в Замке Двух Принцесс,они точно решили меня разыграть!',
          ponyId: '3'
        },
        {
          text: 'Ха! Я правильно сделала,что пошла искать всех  в Замке Двух Принцесс,тут ведь ...совсем не страшно...Я уверенна ,что они прячутся там!',
          ponyId: '4'
        },
        {
          text: 'Ну и почему я решила искать всех в Замке Двух Принцесс..... Ох,я же запачкаю себе все копытца здесь....Ну ничего Рарити! Вдруг твои друзья в опасности,лучше я пожерствую красотой и спасу их!',
          ponyId: '5'
        }]
    }
  ]
  chosenDirection: Direction
  @Input() chosenPony: Pony
  @Output() weChosedDirection = new EventEmitter<Direction>()
  @Output() directionButtonClicked = new EventEmitter<void>()
  @Output() goBackButtonInDialogBox = new EventEmitter()

  back() {
    this.goBackButtonInDialogBox.emit()
  }

  chosedDirection(direction: any) {
    this.chosenDirection = direction;
  }

  next() {
    this.directionButtonClicked.emit()
    this.weChosedDirection.emit(this.chosenDirection)
  }


  constructor() {
    console.log('coonstructor');
  }

  ngAfterViewInit(): void {
       console.log('viewInited')
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes')
  }

  ngOnInit(): void {
    console.log('inited')
  }

  ngOnDestroy() {
    console.log('desytoy');
  }

}

class Person {
  name: string;
  surname: string;
  constructor(surname:string) {
    this.surname = surname;
  }
}

const a = new Person('varvara');


