import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const UpdatePersistentSubscription: Definition = {
  key: 'UpdatePersistentSubscription',
  title: 'Update Persistent Subscription',
  signature: 'updatePersistentSubscription(data: IUpdatePersistentSubscription, correlationId?: string, credentials?: Credentials): Observable<Event<IUpdatePersistentSubscriptionCompleted>>',
  summary: 'Update a persistent subscription group on a stream',
  informal: 'It\'s like createPersistentSubscription except it updates an already existing one',
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
      The first step in using the Competing Consumers subscription model provided by EventStore is to create a new subscription group.
      This operation updates the server-side subscription group that you will use later.  There are many options you can pass to a
      subscription group including read batch size, max rety counts, how often to checkpoint the subscription and more.
    </>
  ),
  returns: 'Observable<Event<IUpdatePersistentSubscriptionCompleted>>: An observable of the result of updating the subscription',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IUpdatePersistentSubscription',
    description: 'Data describing the subscription to update',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Updates and subscribes to a new persistent subscription group',
    code: Snippets.PersistentSubscription,
  } ],
  references: [ {
    href: '/types/i-update-persistent-subscription',
    label: 'IUpdatePersistentSubscription',
  }, {
    href: '/types/i-update-persistent-subscription-completed',
    label: 'IUpdatePersistentSubscriptionCompleted',
  }, {
    href: '/types/credentials',
    label: 'Credentials',
  }, {
    href: '/types/event',
    label: 'Event',
  }, {
    href: 'http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html',
    label: 'Observable',
  }, {
    href: 'https://eventstore.org/docs/introduction/competing-consumers',
    label: 'Official Competing Consumers Documentation',
  } ],
};
