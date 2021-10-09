import { useEffect, useState, useCallback } from "react";
import TileList from "../TileList";

import "./index.scss";

export interface PokemonResult {
  name: string;
  url: string;
}

export interface PokeApiResults {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonResult[];
}

function TileLayout() {
  const [pokemonList, setPokemonList] = useState<PokemonResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPokemonList = useCallback(async () => {
    const pokemonPath = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=-1";

    try {
      setIsLoading(true);
      const res = await fetch(pokemonPath);
      const json: PokeApiResults = await res.json();
      setPokemonList(json.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  return (
    <div>
      <TileList pokemonList={pokemonList} />
    </div>
  );
}

export default TileLayout;
