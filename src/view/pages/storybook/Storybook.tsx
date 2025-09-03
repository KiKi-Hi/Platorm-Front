import React from 'react';

const StorybookPage = () => {
  return (
    <iframe
      src={process.env.REACT_APP_STORYBOOK_URL}
      title="Kiki High Storybook"
      className="h-screen w-full border-none"
    />
  );
}

export {StorybookPage};
