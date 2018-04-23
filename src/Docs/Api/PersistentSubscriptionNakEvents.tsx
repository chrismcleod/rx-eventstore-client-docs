import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const PersistentSubscriptionNakEvents: Definition = {
  key: 'PersistentSubscriptionNakEvents',
  title: 'Nak Persistent Subscription Events',
  signature: 'persistentSubscriptionNakEvents(data: IPersistentSubscriptionNakEvents, correlationId?: string, credentials?: Credentials): Observable<string>',
  summary: 'Not Acknowlege the processing of an event received from a subscription group',
  informal: 'Persistent subscription groups will keep retrying events until they are either ack\'d or nak\'d',
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
      When a message is dispatched to your handlers it is considered “in process” until it is acknowledged, not acknowledged,
      or timed out.  Your handler can return a "not acknowledgement" of a message with hints to the server as to what to do with the message
      (skip/retry/park/server decides). A timeout of the message (which is configurable) is another way this can happen.
    </>
  ),
  returns: 'Observable<string>: An observable of the correlation id for the operation',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IPersistentSubscriptionNakEvents',
    description: 'Data describing which events to not acknowlge, the action to take, and the subscription group on which to nak',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Not Acknowleges events receieved for a persistent subscription group',
    code: Snippets.NakPersistentSubscription,
  } ],
  references: [ {
    href: '/types/i-create-persistent-subscription',
    label: 'IPersistentSubscriptionNakEvents',
  }, {
    href: '/types/credentials',
    label: 'Credentials',
  }, {
    href: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html',
    label: 'Observable',
  }, {
    href: 'https://eventstore.org/docs/introduction/competing-consumers',
    label: 'Official Competing Consumers Documentation',
  } ],
};
