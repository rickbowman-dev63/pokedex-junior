import Tile from "../Tile";
import { PokemonResult } from "../TileLayout";
import "./index.scss";

interface Props {
  pokemonList: PokemonResult[];
}

function TileList({ pokemonList }: Props) {
  return (
    <ul className="tile-layout tile-layout__grid">
      {pokemonList.map((pokemon, i) => (
        <li className="tile-layout__grid-item" key={i}>
          <Tile pokemonText={pokemon.name} pokemonUrl={pokemon.url} />
        </li>
      ))}
    </ul>
  );
}

export default TileList;
