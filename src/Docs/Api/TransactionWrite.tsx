import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const TransactionWrite: Definition = {
  key: 'TransactionWrite',
  title: 'Write to Transaction',
  signature: 'transactionWrite(data: ITransactionWrite, correlationId?: string, credentials?: Credentials): Observable<Event<ITransactionWriteCompleted>>',
  summary: 'Write events in the context of a transaction',
  informal: 'Once a transaction has been started, this operation will write events in the context of that transaction',
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
      The <code className="code">transactionWrite</code> operation writes events to the EventStore in the context of a transaction.  The writes
      created by this operation will not be saved into the designated stream until the <Link href="/api/transactionCommit" label="transactionCommit" /> command
      is sent.  This operation may be sent several times before committing or abandoning the transaction.
    </>
  ),
  returns: 'Observable<Event<ITransactionWriteCompleted>>: An observable with a transaction write completion indicating the result of the write',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'ITransactionWrite',
    description: 'Descriptor with an array of events to write using a transaction id',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Write to a transaction on the stream with the id my-stream',
    code: Snippets.Transaction,
  } ],
  references: [ {
    href: '/types/i-transaction-write',
    label: 'ITransactionWrite',
  }, {
    href: '/types/i-transaction-write-completed',
    label: 'ITransactionWriteCompleted',
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
