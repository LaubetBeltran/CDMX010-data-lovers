import {weaknessesNumberFilterAdd, weaknessesNumberFilterQuit} from '../src/filtros';
describe('weaknessesNumberFilterAdd', () => {
    it('is a function', () => {
        expect(typeof weaknessesNumberFilterAdd).toBe('function');
    });

    it('should return "["exeggcute", "exeggutor", "tyranitar"]" for filterNumber =7', () => {
        expect(weaknessesNumberFilterAdd(7)).toStrictEqual(["exeggcute", "exeggutor", "tyranitar"]);
    });

    it('should return ["paras", "parasect", "geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "jynx", "larvitar", "pupitar"]" for filterNumber =6', () => {
        expect(weaknessesNumberFilterAdd(6)).toStrictEqual(["paras", "parasect", "geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "jynx", "larvitar", "pupitar"]);
    });
})

describe('pokemonWeaknessesFilterQuit', () => {
    it('is a function', () => {
        expect(typeof weaknessesNumberFilterQuit).toBe('function');
    });
    it ('should return `buddyFilter` empty', () => {
        expect(weaknessesNumberFilterQuit('')).toStrictEqual(["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna", "beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran ♀ (female)","nidorina","nidoqueen","nidoran ♂ (male)","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetch'd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr. mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew","chikorita","bayleef","meganium","cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr","sentret","furret","hoothoot","noctowl","ledyba","ledian","spinarak","ariados","crobat","chinchou","lanturn","pichu","cleffa","igglybuff","togepi","togetic","natu","xatu","mareep","flaaffy","ampharos","bellossom","marill","azumarill","sudowoodo","politoed","hoppip","skiploom","jumpluff","aipom","sunkern","sunflora","yanma","wooper","quagsire","espeon","umbreon","murkrow","slowking","misdreavus","unown","wobbuffet","girafarig","pineco","forretress","dunsparce","gligar","steelix","snubbull","granbull","qwilfish","scizor","shuckle","heracross","sneasel","teddiursa","ursaring","slugma","magcargo","swinub","piloswine","corsola","remoraid","octillery","delibird","mantine","skarmory","houndour","houndoom","kingdra","phanpy","donphan","porygon2","stantler","smeargle","tyrogue","hitmontop","smoochum","elekid","magby","miltank","blissey","raikou","entei","suicune","larvitar","pupitar","tyranitar","lugia","ho-oh","celebi"])
    });
});
