import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const ReadEvent: Definition = {
  key: 'ReadEvent',
  title: 'Read Event',
  signature: 'readEvent(data: IReadEvent, correlationId?: string, credentials?: Credentials): Observable<Event<IReadEventCompleted>>',
  summary: 'Read one event from a stream by its event number',
  informal: 'The readEvent operation allows random reads into a stream',
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
      The <code className="code">readEvent</code> operation accepts an event number and retrieves that
      one event from the event store.  This operation accepts an option to resolve linkTos.  You may have
      chosen not to resolve links from some other operation, in which case this is a good way to resolve
      only those links in which you are really interested.
    </>
  ),
  returns: 'Observable<Event<IReadEventCompleted>>: An observable that completes once the read operation has a result',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IReadEvent',
    description: 'Descriptor with data about the event to read',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Reads an event with number 4 from the my-stream stream',
    code: Snippets.ReadEvent,
  } ],
  references: [ {
    href: '/types/i-read-event',
    label: 'IReadEvent',
  }, {
    href: '/types/i-read-event-completed',
    label: 'IReadEventCompleted',
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
