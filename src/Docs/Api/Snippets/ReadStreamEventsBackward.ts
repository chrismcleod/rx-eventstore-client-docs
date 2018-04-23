export const ReadStreamEventsBackward = `
client.readStreamEventsBackward({
  eventStreamId: 'my-stream',
  fromEventNumber: 1042,
  maxCount: 100,
  resolveLinkTos: true,
  requireMaster: false,
}).subscribe((result) => {
  if(result.event.isEndOfStream !== true) {
    client.readStreamEventsBackward({
      eventStreamId: 'my-stream',
      fromEventNumber: result.event.lastEventNumber - 1,
      maxCount: 100,
      resolveLinkTos: true,
      requireMaster: false,
    })
  }
});
`;
