import TileLayout from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/TileLayout",
  component: TileLayout,
} as ComponentMeta<typeof TileLayout>;

const Template: ComponentStory<typeof TileLayout> = () => <TileLayout />;

export const Primary = Template.bind({});
