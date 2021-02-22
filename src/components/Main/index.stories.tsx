import { Meta, Story } from '@storybook/react/types-6-0';

import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Default!!',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

export const Default: Story = (args) => <Main {...args} />;
