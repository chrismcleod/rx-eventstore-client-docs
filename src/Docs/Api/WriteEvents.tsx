import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const WriteEvents: Definition = {
  key: 'WriteEvents',
  title: 'Write Events',
  signature: 'writeEvents(data: IWriteEvents, correlationId?: string, credentials?: Credentials): Observable<Event<IWriteEventsCompleted>>',
  summary: 'Send events to the EventStore server that will be saved under a given stream id',
  informal: 'Saves events to a stream and returns an observable that completes upon the first corresponding WriteEventsCompleted response',
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
      The <code className="code">writeEvents</code> operation accepts an array of event data and saves the events to
      the data store. This operation expects you to provide a stream version number.  If the stream
      you write to has a version number different from the expected version number, no events will
      be saved.  There are special version numbers that can be passed for new streams (-1) or when
      you don't care which version, if any, already exists (-2).
    </>
  ),
  returns: 'Observable<Event<IWriteEventsCompleted>>: An observable that completes once the write operation has been processed',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IWriteEvents',
    description: 'Descriptor with an array of events to write',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Creates a new stream with a unique id',
    code: Snippets.WriteEvents,
  } ],
  references: [ {
    href: '/types/i-write-events',
    label: 'IWriteEvents',
  }, {
    href: '/types/i-write-events-completed',
    label: 'IWriteEventsCompleted',
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
