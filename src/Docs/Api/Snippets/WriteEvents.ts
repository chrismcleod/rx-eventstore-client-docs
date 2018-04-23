export const WriteEvents = `
client.writeEvents({
  eventStreamId: \`dev_test_stream-\$\{v4()\}\`,
  expectedVersion: -1, // stream must not exist
  requireMaster: false,
  events: [ {
    data: Buffer.from(JSON.stringify({ myData: 'is the best data' })),
    dataContentType: 1,
    eventId: wtfuuid.write(v4()),
    eventType: 'TestEvent',
    metadataContentType: 0,
  } ],
});
`;
