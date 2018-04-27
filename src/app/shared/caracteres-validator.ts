import {ValidatorFn} from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms';

export class validateur{

  static sansEspaces(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value.trim() == '') {
        return {'plage': false};

      }
        return {'plage': true};


      

    }
  }

  static longueurMinimum(min: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if ( c.value.trim().length < min ) {
        return {'plage': false};

      }

        return {'plage': true};


      

    }
  }
}
