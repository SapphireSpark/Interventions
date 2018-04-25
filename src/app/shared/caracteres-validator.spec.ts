import { validateur } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
  it ('plage pour la chaine vide', () => {
    let control = { value: ''};
    let validator = validateur.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(false);
  })

  it ('plage pour la chaine de 10 espaces invalide', () => {
    let control = { value: ' '.repeat(10)};
    let validator = validateur.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(false);
  })

  it ('plage pour la phrase avec mots valide', () => {
    let control = { value: 'Banane'};
    let validator = validateur.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(true);
  })

  it ('plage pour la valeur valide 3 espaces plus mots et 3 espaces', () => {
    let control = { value: ' '.repeat(3) + 'blahblahblah' + ' '.repeat(3)};
    let validator = validateur.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(true);
  })
})

describe('longueurMinimum Validator', () => {
  it ('plage pour la chaine vide', () => {
    let control = { value: ''};
    let validator = validateur.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(false);
  })

  it ('plage pour la chaine de 10 espaces invalide', () => {
    let control = { value: ' '.repeat(10)};
    let validator = validateur.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(false);
  })

  it ('plage pour la phrase avec mots valide', () => {
    let control = { value: 'Banane'};
    let validator = validateur.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(true);
  })

  it ('plage pour la valeur valide 3 espaces plus mots et 3 espaces', () => {
    let control = { value: ' '.repeat(3) + 'blahblahblah' + ' '.repeat(3)};
    let validator = validateur.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(true);
  })
})



