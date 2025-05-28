import React from 'react';

const StorybookPage = () => {
    return (
        <iframe
            src={process.env.REACT_APP_STORYBOOK_URL}
            title="Kiki High Storybook"
            className="w-full h-screen border-none"
        />
    );
};

export default StorybookPage;