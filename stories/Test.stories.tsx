import React from 'react';
import { Meta, Story } from '@storybook/react';
import Test, { TestProps } from '../src/Test';

const meta: Meta = {
  title: 'Welcome',
  component: Test,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TestProps> = (args) => (
  <Test {...args}>PINEAPPLE UPSIDE DOWN CAKE PLS</Test>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
