import React from 'react';

import { Code, Link, View } from '../Core';

import Snippets from './snippets';

export const CoreConceptsOverview = () => (
  <View>
    <Link href="/notsure" label="Sending Commands" />
    <Link href="/notsure" label="Receiving Responses" />
    <Link href="/notsure" label="Reading Streams" />
    <Link href="/notsure" label="Subscriptions" />
    <Link href="/notsure" label="Summary" />
  </View>
);

export const CoreConcepts = () => (
  <View className="Doc">

    <h1>Core Concepts</h1>

    <h2>Sending Commands</h2>
    <p>
      The Rx EventStore client sends <strong>Commands</strong> over a TCP socket connection to the
      EventStore server. Commands consist of a numeric code, a correlation id,
      optional credentials per command, and an optional payload of data. The
      EventStore server will send a corresponding response operation for most Commands
      you send. The low-level api does not automatically look for these responses. The
      high-level API will return an observable or an object of observables (depending
      on the command), that user-code can subscribe to in order to receive the
      incoming response for the outgoing Command.
    </p>

    <h2>Receiving Responses</h2>
    <p>
      When you send a operation with the high-level api, an observable is returned bound
      to the appropriate response and correlation id. Some incoming response Commands
      from EventStore return only a <strong>completion</strong> operation while others return a
      completion operation as well as streams of more Commands. For example, if you send
      a <strong>Ping</strong> you will receive back one <strong>Pong</strong> Command. Notice the Ping Command
      observable will complete after receiving back the first Pong operation matching
      the correlation id (auto-generated).
    </p>
    <Code code={ Snippets[ 0 ] } />
    <p>
      For other outgoing Commands such as subscriptions, you receive back an object of
      observables for each type of incoming operation response that may come back as a
      result of the outgoing Command.
    </p>
    <Code code={ Snippets[ 1 ] } />

    <h2>Reading Streams</h2>
    <p>
      Reading streams, including the $all stream, works much the same way as ping. You
      send an outgoing operation to read the appropriate stream in the desired direction
      and you will receive an observable that will emit one completion event with an
      array of all the events read. If you would like to begin processing events as
      soon as possible, you may set the maxCount low and use a combination of rxjs
      operators to emit the events and move to the next batch of events by inspecting
      the isEndOfStream and lastEventNumber of the completion Command. See the
      <Link href="/recipes/pagination" label="Recipes" /> section for an example of how to do this.
    </p>

    <h2>Subscriptions</h2>
    <p>
      The high-level API supports two types of subscriptions. You may connect to a
      pre-defined persistent subscription in which case EventStore manages the
      subscription with its <Link href="https://eventstore.org/docs/introduction/competing-consumers"> Competing Consumers </Link>
      feature. You may also manage your own subscriptions by making use of the catchup
      subscription provided by the high-level API.
    </p>
    <h3>Competing Consumers</h3>
    <p>
      This type of subscription sends events to several consumers who compete to _ack_
      or _nak_ the event. The algorithm for distributing events among consumers is
      determined when defining the subscription in the EventStore Admin panel (or
      wherever you prefer to define these subscriptions). The high-level API provides
      Commands to _ack_ (acknowlege) or _nak_ (not acknowlege) events once they are
      received. Once _acked_ EventStore will stop retrying an event.
    </p>
    <h3>Catchup Subscription</h3>
    <p>
      This subscription works by first subscribing to a stream, reading historical
      events, then switching to the live subscription. When the subscription is
      created the last event number the subscription is aware of is known. We then
      begin reading the stream forward starting at a given event number and emitting
      these historical events. Once we have reached the event number where the live
      subscription started, we switch to emitting the events from that live stream.
      Any events that happened while the historical events were being processed will
      also be emitted in order once the subscription goes live. With this type of
      subscription it is expected you would implement your own system for distributing
      event handling, acking events, and maintaining the event number of the last
      processed event.
    </p>

    <h2>Summary</h2>
    <p>
      These four concepts cover 80% of the functionality of this library. Most of the
      time you will be sending commands, subscribing to their completions if you need
      the response, and/or processing incoming events from subscriptions. The
      remaining 20% are the other various commands you may send EventStore (if defined
      in their protocol buffers) such as `createPersistentSubscription`. If any of
      this does not quite make sense, the other sections of these docs should make
      things more clear.
    </p>

    <hr />

    <ol className="FootNotes">
      <li>
        Look through the
          <Link href="/intro/quickstart" label="Quick Start" />
        section to get an idea of how to get started
      </li>
      <li>
        The <Link href="/recipes" label="Recipes" />
        section is an on-going document of uses of rxjs in relation to this library and is the place to find code samples.
      </li>
      <li>
        The <Link href="/api" label="API" />
        section provides detailed information about outgoing and incoming Commands for every operation supported by this library.
      </li>
    </ol>

  </View>

);
