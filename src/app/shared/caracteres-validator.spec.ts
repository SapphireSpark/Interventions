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

  it ('plage pour la valeur valide 1 espaces et 2 char', () => {
    let control = { value: ' aa' };
    let validator = validateur.longueurMinimum(3);
    let result = validator(control as AbstractControl);
    expect(result['plage']).toBe(true);
  })


it ('plage pour la valeur valide 2 espaces et 1 char', () => {
  let control = { value: ' '.repeat(2) + 'a' };
  let validator = validateur.longueurMinimum(3);
  let result = validator(control as AbstractControl);
  expect(result['plage']).toBe(true);
})


it ('plage pour la valeur valide 3 espaces et 3 char', () => {
  let control = { value: ' '.repeat(3) + 'aaa' };
  let validator = validateur.longueurMinimum(3);
  let result = validator(control as AbstractControl);
  expect(result['plage']).toBe(true);
})


it ('plage pour la valeur valide 5 espaces et 5 char et 5 espaces', () => {
  let control = { value: ' '.repeat(5) + 'aaaaa' +  ' '.repeat(5)};
  let validator = validateur.longueurMinimum(3);
  let result = validator(control as AbstractControl);
  expect(result['plage']).toBe(true);
})
})



