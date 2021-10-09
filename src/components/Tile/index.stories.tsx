import Tile from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Tile",
  component: Tile,
} as ComponentMeta<typeof Tile>;

const Template: ComponentStory<typeof Tile> = () => (
  <Tile
    pokemonText={"test"}
    pokemonUrl={"https://pokeapi.co/api/v2/pokemon/1/"}
  />
);

export const Primary = Template.bind({});
