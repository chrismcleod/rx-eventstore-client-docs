export const SubscribeToStream = `
  const subscription = client.subscribeToStream({
    eventStreamId: 'my-stream',
    resolveLinkTos: true,
  });

  subscription.onComplete.subscribe((completion) => {
    console.log(completion.data.lastEventNumber);
  });

  subscription.onEvent.subscribe((operation) => {
    console.log(operation.data.event.event);
    console.log(operation.data.event.link);
    client.unsubscribeFromStream();
  });

});
`;
