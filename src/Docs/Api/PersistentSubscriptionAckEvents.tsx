import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const PersistentSubscriptionAckEvents: Definition = {
  key: 'PersistentSubscriptionAckEvents',
  title: 'Ack Persistent Subscription Events',
  signature: 'persistentSubscriptionAckEvents(data: IPersistentSubscriptionAckEvents, correlationId?: string, credentials?: Credentials): Observable<string>',
  summary: 'Acknowlege the successful processing of an event received from a subscription group',
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
      The Competing Consumers subscription model provided by EventStore will send events to your
      <Link href="/api/connect-to-persistent-subscription" label="connected" /> handlers.  The number of events
      it sends depends on the configuration of the server-side subscription as well as the parameters used when
      connecting to the subscription.  The subscription will keep retrying events until they are either acked or
      nak'd.
      <br /><br />
      EventStore uses the concept of <Link href="https://eventstore.org/docs/http-api/optional-http-headers/resolve-linkto/" label="Link-Tos" />
      which are events that point to other events. When configuring the subscription, you have the option to automatically resolve link-tos.
      This means that both the event representing the link, as well as the event being pointed to by the link, will be available when an event
      appears in a handler.  <strong>If an event received by a handler has the <code className="code">link</code> property, you should ack
      or nak the eventId on that object.  Otherwise you ack or nak the eventId on the <code className="code">event</code> object</strong>.
      If you set <em>resolve link-tos</em> to false when creating the subscrpition group, there will not be a <code className="code">link</code>
      &nbsp;property when an event appears in your handler.
      <br /><br />
      This operation is a one-way response back to the EventStore server. Therefore, the observable returned by this operation immediately completes with
      only the correlation id used.
    </>
  ),
  returns: 'Observable<string>: An observable of the correlation id for the operation',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IPersistentSubscriptionAckEvents',
    description: 'Data describing which events to acknowlge on which subscription group',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Acknowleges events receieved for a persistent subscription group',
    code: Snippets.PersistentSubscription,
  } ],
  references: [ {
    href: '/types/i-create-persistent-subscription',
    label: 'IPersistentSubscriptionAckEvents',
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
