import { Component } from '@angular/core';
import { Store, State, Action } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR, IncrementarAction, DecrementarAction } from './contador/contador.accions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'r-app';
  contador:number;
  constructor(private store:Store<AppState>)
  {
    //this.contador=10;
    this.store.select('contador').subscribe(contador=>
      {
        this.contador= contador;
        console.log(contador);
      });
  }
  incrementar()
  {
    const accion=  new IncrementarAction();
    this.store.dispatch(accion);
  }
  decrementar()
  {
    const accion=  new DecrementarAction();
    this.store.dispatch(accion);
  }
}
