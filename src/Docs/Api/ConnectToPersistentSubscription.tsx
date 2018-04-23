import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const ConnectToPersistentSubscription: Definition = {
  key: 'ConnectToPersistentSubscription',
  title: 'Connect to Persistent Subscription',
  signature: 'connectToPersistentSubscription(data: IConnectToPersistentSubscription, correlationId?: string, credentials?: Credentials): Publisher<IPersistentSubscriptionConfirmation, IPersistentSubscriptionStreamEventAppeared>',
  summary: 'Connect to a persistent subscription group',
  informal: 'Once a subscription has been created as part of an admin taks or deployment, clients can connect to it',
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
      Clients can connect to a persistent subscription after is has been created.  This operation will return an object with two properties
      <code className="code">onComplete</code> and <code className="code">onEvent</code>.  These properties are observables for a completion
      command and an ongoing command stream that receives events one-at-a-time from the subscription.  The <code className="code">allowedInFlightMessages</code>
      &nbsp;parameter is <Link href="https://eventstore.org/docs/dotnet-api/competing-consumers/index.html#connecting-to-a-subscription-group" label="important" />
      to get right otherwise your handlers will be idle for too long or overloaded.
    </>
  ),
  returns: 'Publisher<IPersistentSubscriptionConfirmation, IPersistentSubscriptionStreamEventAppeared>: Two observables, one for the confirmation of the connection and one for each event emitted from the subscription',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IConnectToPersistentSubscription',
    description: 'Data describing the subscription to connect to and how many events to buffer',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Connect to a new persistent subscription group',
    code: Snippets.PersistentSubscription,
  } ],
  references: [ {
    href: '/types/i-connect-to-persistent-subscription',
    label: 'IConnectToPersistentSubscription',
  }, {
    href: '/types/i-persistent-subscription-confirmation',
    label: 'IPersistentSubscriptionConfirmation',
  }, {
    href: '/types/i-persistent-subscription-stream-event-appeared',
    label: 'IPersistentSubscriptionStreamEventAppeared',
  }, {
    href: '/types/credentials',
    label: 'Credentials',
  }, {
    href: '/types/event',
    label: 'Event',
  }, {
    href: '/types/Publisher',
    label: 'Publisher',
  }, {
    href: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html',
    label: 'Observable',
  }, {
    href: 'https://eventstore.org/docs/introduction/competing-consumers',
    label: 'Official Competing Consumers Documentation',
  } ],
};
