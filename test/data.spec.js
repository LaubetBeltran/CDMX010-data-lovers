import { objAllPokemon, nextEvolutions, prevEvolutions, searchPokemon, searchEvolutions} from '../src/data.js';

describe('searchPokemon', () => {
  it('is a function', () => {
    expect(typeof searchPokemon).toBe('function');
  });

  it('should return `pokemonFounded`', () => {
    expect(searchPokemon(objAllPokemon, 'charizard')).toBe(objAllPokemon[5]);
    expect(searchPokemon(objAllPokemon, 'bulbasaur')).toBe(objAllPokemon[0]);
  });
});


describe('searchEvolutions', () => {
  it('is a function', () => {
    expect(typeof searchEvolutions).toBe('function');
  });

  it('should return `evolutionsArray`', () => {
    expect(searchEvolutions(objAllPokemon[0],'next-evolution', nextEvolutions)).toStrictEqual([objAllPokemon[1], objAllPokemon[2]]);
    expect(searchEvolutions(objAllPokemon[5],'prev-evolution', prevEvolutions)).toStrictEqual([objAllPokemon[3], objAllPokemon[4]]);
    expect(searchEvolutions(objAllPokemon[7],'prev-evolution', prevEvolutions)).toStrictEqual([objAllPokemon[6]]);
    expect(searchEvolutions(objAllPokemon[7],'next-evolution', nextEvolutions)).toStrictEqual([objAllPokemon[8]]);
    expect(searchEvolutions(objAllPokemon[5],'next-evolution', nextEvolutions)).toStrictEqual([]);
    expect(searchEvolutions(objAllPokemon[3],'prev-evolution', prevEvolutions)).toStrictEqual([]);
    expect(searchEvolutions(objAllPokemon[110],'next-evolution', nextEvolutions)).toStrictEqual([objAllPokemon[111]]);
  });
});


