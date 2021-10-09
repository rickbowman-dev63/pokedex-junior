import TileList from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/TileList",
  component: TileList,
} as ComponentMeta<typeof TileList>;

const Template: ComponentStory<typeof TileList> = () => (
  <TileList pokemonList={[]} />
);

export const Primary = Template.bind({});
