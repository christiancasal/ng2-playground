import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SomeThingComponent } from './some-thing/some-thing.component';
import { SomeBoxComponent } from './some-box/some-box.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { LetterResultComponent } from './letter-result/letter-result.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SomeThingComponent,
    SomeBoxComponent,
    TitleBoxComponent,
    LetterResultComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
