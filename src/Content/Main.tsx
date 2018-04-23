import React from 'react';

import { View } from '../Core';
import { Routes } from '../Routes';

import './style.scss';

const rFind = <T extends any>(array: T[], key: string, value: any): T => {
  let o;
  array.some(function iter(a) {
    if (a[ key ] === value) {
      o = a;
      return true;
    }
    return Array.isArray(a.children) && a.children.some(iter);
  });
  return o as any as T;
};

interface Props {
  path: string;
}

export const Main: React.SFC<Props> = ({ path }) => {
  const DocDef = (rFind(Routes, 'path', path) || Routes[ 0 ]);
  const { content: Doc } = DocDef;
  return (
    <View id="Content">
      <View className="Docs">
        { <Doc /> }
      </View>
    </View>
  );
};
