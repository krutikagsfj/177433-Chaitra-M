import { GameRoutingModule } from './Routing/game-routing/game-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GameCityComponent } from './game-city/game-city.component';
import { PlayComponent } from './play/play.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameCityComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    GameRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
