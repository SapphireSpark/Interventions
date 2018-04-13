import {ValidatorFn} from '@angular/forms/src/directives/validators';

export class validateur{

  static sansEspaces(): ValidatorFn {
    return (): { [key: string]: boolean } | null => {
      return {'sansEspaces': true};

    }
  }
}
