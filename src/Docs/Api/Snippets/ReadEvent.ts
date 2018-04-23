export const ReadEvent = `
client.readEvent({
  eventStreamId: \`dev_test_stream-\$\{v4()\}\`,
  eventNumber: 4,
  resolveLinkTos: true,
  requireMaster: false,
});
`;
