export const ReadStreamEventsForward = `
client.readStreamEventsForward({
  eventStreamId: 'my-stream',
  fromEventNumber: 4,
  maxCount: 100,
  resolveLinkTos: true,
  requireMaster: false,
}).subscribe((result) => {
  if(result.event.isEndOfStream !== true) {
    client.readStreamEventsForward({
      eventStreamId: 'my-stream',
      fromEventNumber: result.event.lastEventNumber + 1,
      maxCount: 100,
      resolveLinkTos: true,
      requireMaster: false,
    })
  }
});
`;
