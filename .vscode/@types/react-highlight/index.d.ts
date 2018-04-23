declare module 'react-highlight' {
  import { ComponentType } from 'react';
  export interface HighlightProperties {
    className?: string;
  }
  const Highlight: ComponentType<HighlightProperties>;
  export default Highlight;
}
