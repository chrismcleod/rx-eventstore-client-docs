import React from 'react';

import { TypeTable, View } from '../../Core';
import { IType } from '../../Types';

import * as Definitions from './Definitions';

const TypesDocs: { [ key: string ]: React.ReactType } = {};

Object.keys(Definitions).sort().forEach((key) => {
  TypesDocs[ key ] = () => (
    <View className="Doc" >
      <TypeTable type={ (Definitions as { [ key: string ]: IType })[ key ] } />
    </View>
  );
});

export const Types = () => (
  <View>
    Type definitions
  </View>
);

export { TypesDocs };
