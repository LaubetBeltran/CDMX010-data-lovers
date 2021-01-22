import { objAllPokemon, nextEvolutions, searchPokemon, searchEvolutions } from '../src/data.js';



describe('searchPokemon', () => {
  it('is a function', () => {
    expect(typeof searchPokemon).toBe('function');
  });

  it('returns `pokemonFounded`', () => {
    expect(searchPokemon(objAllPokemon, 'charizard')).toBe(objAllPokemon[5]);
  });
});


describe('searchEvolutions', () => {
  it('is a function', () => {
    expect(typeof searchEvolutions).toBe('function');
  });

  it('returns `nextEvolutionsArray`', () => {
    expect(searchEvolutions(objAllPokemon[0],'next-evolution', nextEvolutions)).toStrictEqual([objAllPokemon[1], objAllPokemon[2]]);
  });
});
