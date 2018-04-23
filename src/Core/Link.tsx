import React from 'react';

import { History } from '../History';

interface Props {
  href: string;
  label?: string;
  className?: React.HTMLAttributes<any>[ 'className' ];
}

export const Link: React.SFC<Props> = (props) => {
  const external = props.href.startsWith('http');
  return external === true ? (
    <a
      className={ props.className }
      rel="noopener noreferrer external"
      href={ props.href }
      target="_blank"
    >
      { props.children || ` ${props.label || props.href} ` }
    </a>
  ) : (
      <a
        className={ props.className }
        rel="noopener noreferrer"
        href={ History.createHref({ pathname: props.href }) }
        target="_self"
      >
        { props.children || ` ${props.label || props.href} ` }
      </a>
    );
};
