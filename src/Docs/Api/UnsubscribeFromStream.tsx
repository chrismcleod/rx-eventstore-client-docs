import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const UnsubscribeFromStream: Definition = {
  key: 'UnsubscribeFromStream',
  title: 'Unsubscribe from Stream',
  signature: 'unsubscribeFromStream: (data: IUnsubscribeFromStream, correlationId?: string, credentials?: Credentials): Observable<Event<ISubscriptionDropped>>',
  summary: 'Drop the current subscription',
  informal: 'The client will drop the current subscription if it is subscribed to a stream',
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
      Unsubscribes from the currently subscribed stream. This operation does not need any parameters as seen in the example.  A connection only
      supports one subscription so this operation drops that subscription. The operation will receive a subscription dropped response and no
      longer receive events from the subscription.  The connection is then ready to subscribe to a new stream.
    </>
  ),
  returns: 'Observable<Event<ISubscriptionDropped>>: An observable with the reason for the dropped subscription',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IUnsubscribeFromStream',
    description: 'Empty object',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Unsubscribes from a stream',
    code: Snippets.SubscribeToStream,
  } ],
  references: [ {
    href: '/types/i-unsubscribe-from-stream',
    label: 'IUnsubscribeFromStream',
  }, {
    href: '/types/i-subscription-dropped',
    label: 'ISubscriptionDropped',
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
