import React from 'react';

type Props = {
  children: React.ReactElement;
};

const RootLayout = (props: Props) => {
  return (
    <>
      {/* Header */}
      {props.children}
      {/* Footer */}
    </>
  );
};

export default RootLayout;
