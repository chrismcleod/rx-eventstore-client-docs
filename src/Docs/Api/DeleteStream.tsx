import React from 'react';

import { ApiTable, Link, View } from '../../Core';
import { Definition } from '../../Types';

import { correlationIdParam, credentialsParam } from './Common';
import * as Defs from './Definitions';
import * as Snippets from './Snippets';

export const DeleteStream: Definition = {
  key: 'DeleteStream',
  title: 'Delete Stream',
  signature: 'deleteStream(data: IDeleteStream, correlationId?: string, credentials?: Credentials): Observable<Event<IDeleteStreamCompleted>>',
  summary: 'Delete a stream',
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
      The <code className="code">deleteStream</code> operation deletes a stream.  By default, the delete is a soft delete and the stream can be
      restored by appending events to it after it has been deleted.  The commmand accepts a hardDelete boolean and when set to true, the delete
      is permanent.
    </>
  ),
  returns: 'Observable<Event<IDeleteStreamCompleted>>: An observable with a payload containing the result of deleting the stream',
  params: [ {
    key: 'data',
    name: 'data',
    attribute: '',
    type: 'IDeleteStream',
    description: 'Data describing the stream to delete',
  },
    correlationIdParam,
    credentialsParam,
  ],
  examples: [ {
    description: 'Deletes a stream with the id my-stream',
    code: Snippets.DeleteStream,
  } ],
  references: [ {
    href: '/types/i-delete-stream',
    label: 'IDeleteStream',
  }, {
    href: '/types/i-delete-stream-completed',
    label: 'IDeleteStreamCompleted',
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
