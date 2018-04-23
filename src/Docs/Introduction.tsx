import React from 'react';

import { Code, Link } from '../Core';

const quickStart = `
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

  const subscription = client.subscribeToStream({
    eventStreamId: 'my-stream',
    resolveLinkTos: true,
  });

  subscription.onComplete.subscribe((completion) => {
    console.log(completion.data.lastEventNumber);
  });

  subscription.onEvent.subscribe((operation) => {
    console.log(operation.data.event.event);
    console.log(operation.data.event.link);
    client.unsubscribeFromStream();
  });

});
`;

export const Intro = () => (
  <div className="Doc">
    <h1>RxJS Event Store Client</h1>
    <p>
      <br /><br />
      RxJS 5-based client for
      <Link href="https://eventstore.org/" label="EventStore." />
      Process and compose EventStore streams as RxJS streams.
    </p>

    <h2>Install</h2>
    <p>
      <strong>With yarn: </strong>
      <Code langauge="bash">yarn add rx-eventstore-client</Code>
    </p>
    <p>
      <strong>With npm: </strong>
      <Code langauge="bash">npm i --save rx-eventstore-client</Code>
    </p>

    <h2>Quick Start</h2>
    <p>
      <Code langauge="bash" code={ quickStart } />
    </p>

    <h2>Read More</h2>
    <p>
      <ul>
        <li>
          <Link href="/intro/motivation" label="Learn more" /> about what makes this node client unique among the other options.
        </li>
        <li>
          Read about the <Link href="/intro/core-concepts" label="core concepts" /> of this client and EventStore.
        </li>
        <li>
          Get in-depth <Link href="/api" label="api" /> documentation.
        </li>
        <li>
          Quickly reference <Link href="/types" label="api" /> type information.
        </li>
      </ul>
      <br /><br /><br />
    </p>
  </div>
);
