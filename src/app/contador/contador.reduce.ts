import { Action, ActionsSubject } from '@ngrx/store';
import { actions,INCREMENTAR,DECREMENTAR,MULTIPLICAR } from './contador.accions';

export function contadorReducer (state: number = 10,action:actions )
{

    switch (action.type)
    {
        case 'INCREMENTAR':
        return state+1;
        case 'DECREMENTAR':
        return state-1;
        case 'MULTIPLICAR':
        return state*action.payload;
        case 'DIVIDIR':
        return state/action.payload;
        case 'RESET':
        return state=0;
        default:
        return state;
    }
}