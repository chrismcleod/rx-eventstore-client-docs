import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const TransactionCommit: Definition = {
  key: 'TransactionCommit',
  title: 'Commit Transaction',
  signature: 'transactionCommit(data: ITransactionCommit, correlationId?: string, credentials?: Credentials): Observable<Event<ITransactionCommitCompleted>>',
  summary: 'Commit a transaction that is being tracked using a transaction id',
  informal: 'Commits a transaction that is managed on the server flushing all queued write commands to the stream',
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
      The <code className="code">transactionCommit</code> operation commits a transaction being managed on the EventStore server.  The command
      returns information about the transaction result.  The transactionCommit result will also contain information about the commit position and last event number
      of the stream where the transaction was comitted.
    </>
  ),
  returns: 'Observable<Event<ITransactionCommitCompleted>>: An observable with a payload containing the result of the transaction',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'ITransactionCommit',
    description: 'Transaction data for the transaction to commit',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Commits a transaction on the stream with the id my-stream',
    code: Snippets.Transaction,
  } ],
  references: [ {
    href: '/types/i-transaction-commit',
    label: 'ITransactionCommit',
  }, {
    href: '/types/i-transaction-commit-completed',
    label: 'ITransactionCommitCompleted',
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
