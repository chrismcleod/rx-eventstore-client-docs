import classNames from 'classnames';
import React from 'react';
import Icon from 'react-simple-line-icons';

import { Link, Text } from '../../Core';

import './style.scss';

interface TitleProps {
  href: string;
  title: string;
  expanded?: boolean;
}

export const Title: React.SFC<TitleProps> = props => (
  <Link href={ props.href } className={ classNames({ AccordionTitle: true, Active: props.expanded }) }>
    <Icon
      size="Small"
      name="arrow-right"
      className={ classNames({
        'icon-arrow-down': props.expanded,
        'icon-arrow-right': !props.expanded,
        Icon: true,
      }) }
    />
    <Text className={ classNames({ Title: true, Active: props.expanded }) }>{ props.title }</Text>
  </Link>
);
