import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const DeletePersistentSubscription: Definition = {
  key: 'DeletePersistentSubscription',
  title: 'Delete Persistent Subscription',
  signature: 'deletePersistentSubscription(data: IDeletePersistentSubscription, correlationId?: string, credentials?: Credentials): Observable<Event<IDeletePersistentSubscriptionCompleted>>',
  summary: 'Delete a persistent subscription group on a stream',
  informal: 'You will probably delete a subscription as part of a deployment or an administrative task',
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
      Sometimes subscription groups are temporary or process-once streams.  If you are done with a subscription group this
      operation will permanently delete it from the EventStore server.  This operation cannot be undone.
    </>
  ),
  returns: 'Observable<Event<IDeletePersistentSubscriptionCompleted>>: An observable that completes after receiving the result of the delete operation',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IDeletePersistentSubscription',
    description: 'Data describing the subscription to delete',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Deletes a subscription group',
    code: Snippets.DeletePersistentSubscription,
  } ],
  references: [ {
    href: '/types/i-delete-persistent-subscription',
    label: 'IDeletePersistentSubscription',
  }, {
    href: '/types/i-delete-persistent-subscription-completed',
    label: 'IDeletePersistentSubscriptionCompleted',
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
