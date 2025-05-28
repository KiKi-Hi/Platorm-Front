import React from 'react';
import KeyboardCanvas from '@view/components/keyboard/KeyboardCanvas';
import StorybookLink from "@view/components/temp/StorybookLink";

const KeyboardPage = () => {
    return (
        <main className="fixed top-0 left-0 w-screen h-screen bg-gray-900">
            <KeyboardCanvas />
            <StorybookLink/>
        </main>
    );
};

export default KeyboardPage;