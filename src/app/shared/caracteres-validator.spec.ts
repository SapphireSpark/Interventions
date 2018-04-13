import { validateur } from "./caracteres-validator";

describe('Espace Validator', () => {
  it ('plage pour la valeur valide', () => {
    let validator = validateur.sansEspaces();
    let result = validator(null);
    expect(result['sansEspaces']).toBe(true);
  })
})
