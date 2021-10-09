import { useCallback, useState, useEffect } from "react";
import "./index.scss";

interface Props {
  pokemonText: string;
  pokemonUrl: string;
}

interface PokemonSprites {
  front_default: string;
}

interface PokemonType {
  name: string;
  url: string;
}

interface PokemonTypeSlot {
  slot: number;
  type: PokemonType;
}

interface Pokemon {
  id: number;
  sprites: PokemonSprites;
  types: PokemonTypeSlot[];
}

function Tile({ pokemonText, pokemonUrl }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPokemon = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(pokemonUrl);
      const json: Pokemon = await res.json();
      setPokemon(json);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }, [pokemonUrl]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <div className="tile tile--hexagon">
      <img
        className="tile__image"
        src={pokemon?.sprites.front_default}
        alt={pokemonText}
        decoding="async"
        loading="lazy"
      />
      <p className="tile__caption">{pokemonText}</p>
    </div>
  );
}

export default Tile;
