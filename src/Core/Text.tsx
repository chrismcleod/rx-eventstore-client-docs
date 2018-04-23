import React from 'react';

export const Text: React.SFC<React.HTMLAttributes<HTMLSpanElement>> = props => (
  <span { ...props }>{ props.children }</span>
);
