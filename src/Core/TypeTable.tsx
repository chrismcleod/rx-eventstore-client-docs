import React from 'react';

import { IType } from '../Types';

import { Code } from './Code';
import { Link } from './Link';
import './TypeTable.scss';
import { View } from './View';

interface Props {
  type: IType;
}

export const TypeTable: React.SFC<Props> = ({ type }) => console.log(type) || (
  <View className="TypeTable">
    <View className="TypeDefinition">
      <span className="Title">{ type.key }</span>
      <View className="Examples">
        <span className="Description">{ type.key }</span>
        <Code code={ type.descriptor || '' } />
      </View>
    </View>
  </View>
);
