import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const ReadStreamEventsBackward: Definition = {
  key: 'ReadStreamEventsBackward',
  title: 'Read Stream Events Backward',
  signature: 'readStreamEventsBackward(data: IReadStreamEvents, correlationId?: string, credentials?: Credentials): Observable<Event<IReadStreamEventsCompleted>>',
  summary: 'Reads a max count number of events from a stream starting from a given event number',
  informal: 'This operation will read a certain number of events from a stream moving toward earlier events',
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
      This operation reads events from a single event stream starting at the given event number.  It will then read events that occurred before
      that event, in descending order.  It will read up to the given max count of events and then complete.  The operation does not complete until all the
      events have been read.  The max count of events to read must be less than 4096.  The response includes data about the first and last event
      read, as well as if the end of the stream has been reached.  Pagination implementation is up to the user.  In any case, optimal
      performance seems to be reading a max count around 100 events.  To read from an event number to the end of a stream, you may keep
      sending this operation until the response's isEndOfStream property is true.  The RxJS
      <Link href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-exhaustMap" label="exhaustMap" />
      or
      <Link href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-expand" label="expand" />
      operators can be useful here.
    </>
  ),
  returns: 'Observable<Event<IReadStreamEventsCompleted>>: An array of ordered events as well as data about the next batch (useful for pagination)',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IReadStreamEvents',
    description: 'Data describing the stream from which to read and where to start',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Reads events backward from a stream',
    code: Snippets.ReadStreamEventsBackward,
  } ],
  references: [ {
    href: '/types/i-read-stream-events',
    label: 'IReadStreamEvents',
  }, {
    href: '/types/i-read-stream-events-completed',
    label: 'IReadStreamEventsCompleted',
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
