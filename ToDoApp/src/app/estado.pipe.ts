import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: any): any {
      switch(value){
        case 1: return 'Done';
        case 2: return 'In progress';
    }
  }
}



