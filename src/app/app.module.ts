import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { DirectionComponent } from './direction/direction.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DirectionDetailComponent } from './direction-detail/direction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    DirectionComponent,
    DialogBoxComponent,
    DirectionDetailComponent
  ],
  imports: [
    IntroductionComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
