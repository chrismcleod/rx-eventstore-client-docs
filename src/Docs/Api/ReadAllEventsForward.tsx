import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const ReadAllEventsForward: Definition = {
  key: 'ReadAllEventsForward',
  title: 'Read All Events Forward',
  signature: 'readAllEventsForward(data: IReadAllEvents, correlationId?: string, credentials?: Credentials): Observable<Event<IReadAllEventsCompleted>>',
  summary: 'Reads a max count number of events from the $all stream starting from a given commit and prepare position',
  informal: 'This operation will read a certain number of events from the $all stream moving toward later events',
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
      This operation reads events from the special $all stream (which contains all events) starting at the given position.  It will then read events
      that were committed after that event, in ascending order.  It will read up to the given max count of events and then complete.  The operation
      does not complete until all the events have been read.  The max count of events to read must be less than 4096.  The response includes data about
      the position read and the next position to read.  Pagination implementation is up to the user.  In any case, optimal performance seems to be
      reading a max count around 100 events.  The RxJS
      <Link href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-exhaustMap" label="exhaustMap" />
      or
      <Link href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-expand" label="expand" />
      operators can be useful for contiuous reading from the $all stream.
    </>
  ),
  returns: 'Observable<Event<IReadAllEventsCompleted>>: An array of ordered events as well as data about the next batch (useful for pagination)',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IReadAllEvents',
    description: 'Data describing the position from which to start reading the $all stream',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Reads events forward from the $all stream',
    code: Snippets.ReadAllEventsForward,
  } ],
  references: [ {
    href: '/types/i-read-all-events',
    label: 'IReadAllEvents',
  }, {
    href: '/types/i-read-all-events-completed',
    label: 'IReadAllEventsCompleted',
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
