import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const SubscribeToStream: Definition = {
  key: 'SubscribeToStream',
  title: 'Subscribe to Stream',
  signature: 'subscribeToStream(data: ISubscribeToStream, correlationId?: string, credentials?: Credentials): Publisher<ISubscriptionConfirmation, IStreamEventAppeared>',
  summary: 'Subscribes to new events emitted on a stream',
  informal: 'Connects to a stream and recieves any events emitted after connecting',
  overview: (
    <View>
      <Link href="/notsure" label="Signature" />
      <Link href="/notsure" label="Description" />
      <Link href="/notsure" label="Params" />
      <Link href="/notsure" label="Examples" />
    </View>
  ),
  details: (
    <>
      Subscribes to a single event stream. New events written to the stream while the subscription is active will be pushed to the client.
    </>
  ),
  returns: 'Publisher<ISubscriptionConfirmation, IStreamEventAppeared>: Two observables, one for the confirmation of the connection and one for each event emitted from the subscription',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'ISubscribeToStream',
    description: 'Data describing the stream to which to connect',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Subscribes to a stream',
    code: Snippets.SubscribeToStream,
  } ],
  references: [ {
    href: '/types/i-subscribe-to-stream',
    label: 'ISubscribeToStream',
  }, {
    href: '/types/i-subscription-confirmation',
    label: 'ISubscriptionConfirmation',
  }, {
    href: '/types/i-stream-event-appeared',
    label: 'IStreamEventAppeared',
  }, {
    href: '/types/credentials',
    label: 'Credentials',
  }, {
    href: '/types/event',
    label: 'Event',
  }, {
    href: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html',
    label: 'Observable',
  } ],
};
