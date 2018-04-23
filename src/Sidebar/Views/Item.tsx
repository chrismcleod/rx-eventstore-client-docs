import classNames from 'classnames';
import React from 'react';
import Icon from 'react-simple-line-icons';

import { Link, Text } from '../../Core';

import './style.scss';

interface TitleProps {
  path: string;
  title: string;
  active?: boolean;
}

export const Item: React.SFC<TitleProps> = props => (
  <Link href={ props.path } className="Item">
    <Text className={ classNames({ Title: true, Active: props.active }) }>{ props.title }</Text>
  </Link>
);
