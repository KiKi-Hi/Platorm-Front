import type { Meta, StoryObj } from '@storybook/react';
import KeyboardCanvas from './KeyboardCanvas';

const meta: Meta<typeof KeyboardCanvas> = {
  title: '3D/KeyboardCanvas',
  component: KeyboardCanvas,
};

export default meta;
type Story = StoryObj<typeof KeyboardCanvas>;

 const Default: Story = {
  render: () => (
    <div className="h-screen w-screen">
      <KeyboardCanvas />
    </div>
  ),
};

 export { Default };