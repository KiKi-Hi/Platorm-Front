import React from 'react';
import KeyboardCanvas from '@view/components/keyboard/KeyboardCanvas';
import StorybookLink from '@view/components/temp/StorybookLink';

function KeyboardPage() {
  return (
    <main className="fixed left-0 top-0 h-screen w-screen bg-gray-900">
      <KeyboardCanvas />
      <StorybookLink />
    </main>
  );
}

export default KeyboardPage;
