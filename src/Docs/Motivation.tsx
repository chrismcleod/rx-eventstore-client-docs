import React from 'react';

import { Link, View } from '../Core';

export const Motivation = () => (

  <div className="Doc">

    <h1>Motivation</h1>
    <p>
      <br /><br />
      Once you have accepted the benefits of EventStore itself, you may discover <strong>your code must coordinate, recombine, and remix
      many streams of data coming from EventStore</strong>. These streams can represent many things, usually the state of aggregates
      over time as well as projections that bring new insight to other streams. There are also built-in projections that aggregate
      streams by categories, event types, etc and custom projections for anything else you can imagine. An app utilizing EventStore
      will have to manage and process all these streams, and often the processing of one stream depends on the processing of
      another in real-time. Managing all these live data streams is hard. If you wanted to take an event from one stream, wait
      for two events of a particular type from another stream, buffer up to five of these aggregations into an array and emit
      the array every 5 seconds even if empty, you would have to manage all kinds of state, timers, and boilerplate code.
      <br /><br />
      This type of code is a solved problem and <strong>writing boilerplate to recombine data streams is not your core competency. </strong>When
      you spend your time writing this type of code, you can lose sight of the overall picture and purpose of your stream processing.
      Nobody likes bolierplate but if that isn't enough, also <strong>consider the difficulty managing all that application state
      without unintended state mutations</strong>. As developers, we suspect
      <a href="http://henrikeichenhardt.blogspot.co.uk/2013/06/why-shared-mutable-state-is-root-of-all.html" target="_blank"> shared mutable state is the root of all evil </a>.
      We will inevitably find ourselves trying to wrangle a tangle of state and streams
      <a href="https://en.wikipedia.org/wiki/Concurrency_%28computer_science%29" target="_blank"> concurrently </a> and this is where
      <a href="https://xgrommx.github.io/rx-book/why_rx.html" target="_blank"> rxjs shines </a>. One of the major advantages of RxJS as
      well as functional programming in general is the ability to compose functions.
      <br /><br />
      Another complication of managing all these
      streams occurs when you want to <strong>create readable and maintainable stream handling code</strong>. With traditional callbacks
      you can end up with a nested mess. Even promise chains can be hard to follow sometimes though async/await makes the situation
      much better. Composition with RxJS allows for pithy and readable pipelines. While RxJS does not automatically give you
      a maintainable codebase, it encourages a style which leads to maintainable code. This is because functional programming
      encourages you to break down logic into focused well-named functions. Many of these end up being reusable and chains
      can read like a book. With functional style programming, you pay for tech-debt as you go.
      <br /><br />
      <strong>Rx EventStore provides a functional typescript alternative¹ for interacting with the EventStore TCP interface</strong>.
      The library consists of a low-level implementation of the EventStore protocol buffer definitions and a higher level API that uses
      the low-level implementation. Also included is a static and typed transpilation of the EventStore .proto spec. Each operation in the
      higher level API conforms to a few <Link href="intro/core-concepts" label="Core Concepts" />.
      <br /><br />
    </p>

    <hr />

    <p>
      <sup>1</sup> <a href="https://github.com/x-cubed/event-store-client">https://github.com/x-cubed/event-store-client</a>
    </p>

  </div>
);
