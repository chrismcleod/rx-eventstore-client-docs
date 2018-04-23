import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const CreatePersistentSubscription: Definition = {
  key: 'CreatePersistentSubscription',
  title: 'Create Persistent Subscription',
  signature: 'createPersistentSubscription(data: ICreatePersistentSubscription, correlationId?: string, credentials?: Credentials): Observable<Event<ICreatePersistentSubscriptionCompleted>>',
  summary: 'Create a persistent subscription group on a stream',
  informal: 'You will probably create a subscription as part of a deployment or an administrative task. You can create subscription groups to map to any stream',
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
      This operation creates the server-side subscription group that you will use later.  There are many options you can pass to a
      subscription group including read batch size, max rety counts, how often to checkpoint the subscription and more.
    </>
  ),
  returns: 'Observable<Event<ICreatePersistentSubscriptionCompleted>>: An observable of the result of creating the subscription',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'ICreatePersistentSubscription',
    description: 'Data describing the subscription to create',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Creates and subscribes to a new persistent subscription group',
    code: Snippets.PersistentSubscription,
  } ],
  references: [ {
    href: '/types/i-create-persistent-subscription',
    label: 'ICreatePersistentSubscription',
  }, {
    href: '/types/i-create-persistent-subscription-completed',
    label: 'ICreatePersistentSubscriptionCompleted',
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
