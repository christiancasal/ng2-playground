import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SomeThingComponent } from './some-thing/some-thing.component';
import { SomeBoxComponent } from './some-box/some-box.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { LetterResultComponent } from './letter-result/letter-result.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';

import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    SomeThingComponent,
    SomeBoxComponent,
    TitleBoxComponent,
    LetterResultComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'heroes',
      component: HeroesComponent 
    },
    {
      path: 'something',
      component: SomeThingComponent
    }
    ]),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
