import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const TransactionStart: Definition = {
  key: 'TransactionStart',
  title: 'Start Transaction',
  signature: 'transactionStart(data: ITransactionStart, correlationId?: string, credentials?: Credentials) => Observable<Event<ITransactionStartCompleted>>',
  summary: 'Start a transaction that is tracked using a transaction id',
  informal: 'Starts a transaction that is managed on the server, where all further transactionWrite commands using the transaction id occur within the transaction',
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
      The <code className="code">transactionStart</code> operation creates a new transaction on the EventStore server.  The command
      returns a <strong>transactionId</strong> that is used when sending <Link href="/api/transaction-write" label="transactionWrite" /> commands. Any
      transactionWrite commands sent using the transactionId will not be committed until a final <Link href="/api/commit-transaction" label="transactionCommit" />
      operation is sent.  Transactions involving multiple streams are <Link href="https://github.com/EventStore/EventStore/issues/133#issuecomment-43331840" label="not supported" />
      by EventStore.
    </>
  ),
  returns: 'Observable<Event<ITransactionStartCompleted>>: An observable with a transaction start payload containing the transaction id',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'ITransactionStart',
    description: 'Stream for which to start the transaction',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Starts a transaction on the stream with the id my-stream',
    code: Snippets.Transaction,
  } ],
  references: [ {
    href: '/types/i-transaction-start',
    label: 'ITransactionStart',
  }, {
    href: '/types/i-transaction-start-completed',
    label: 'ITransactionStartCompleted',
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
