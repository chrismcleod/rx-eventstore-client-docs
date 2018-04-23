import React from 'react';

import { ApiTable, Code, View } from '../../Core';
import { Definition } from '../../Types';

import * as Definitions from './Definitions';

const ApiDocs: { [ key: string ]: React.ReactType } = {};
const snippet = `
import createClient from 'rx-eventstore-client';

setImmediate(async () => {
  const client = await createClient({
    host: '123.45.67.89',
    port: 1113,
    credentials: {
      username: process.env.ES_USERNAME!,
      password: process.env.ES_PASSWORD!,
    },
  });
});
`;

Object.keys(Definitions).forEach((key) => {
  ApiDocs[ key ] = () => (
    <View className="Doc">
      <ApiTable definition={ (Definitions as { [ key: string ]: Definition })[ key ] } />
    </View>
  );
});

export const Api = () => (
  <View className="Doc">
    <h1>API</h1>
    <p>
      <br /><br />
      This section gives detailed information about how to use this client.  Below is an example
      of how to create a new client instance.
    </p>

    <h2>Creating a Client Instance</h2>
    <p>
      <Code code={ snippet } />
    </p>
  </View>
);

export { ApiDocs };
