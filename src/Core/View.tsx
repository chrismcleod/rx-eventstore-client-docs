import React from 'react';

export const View: React.SFC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div { ...props }>{ props.children }</div>
);
