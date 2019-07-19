import { Component, OnInit} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.accions';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {


  contador: number;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador =>
      {
        this.contador = contador;
        console.log(contador);
      });
  }
  reset()
  {
    const accion = new ResetAction();
    this.store.dispatch(accion);
  }

}
