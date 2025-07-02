// custom.d.ts
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.svg?react' {
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}
