import { PlayComponent } from './../../play/play.component';
import { GameCityComponent } from './../../game-city/game-city.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes:Routes=[
  {
    path:'',component:GameCityComponent, pathMatch:'full'
  },
  {
    path:'game', component:GameCityComponent
  },
  {
    path:'play', component:PlayComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class GameRoutingModule { }
