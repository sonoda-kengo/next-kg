import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import React from 'react';
import { CardLink } from '../../components/card-link/card-link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CardLink',
  component: CardLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardLink> = (args) => <CardLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  href: '/about',
  title: 'title',
  imagePath: '',
  children: 'aaaaaaaa',
};
