export const ReadAllEventsForward = `
client.readAllEventsForward({
  commitPosition: 0,
  preparePosition: 0,
  maxCount: 100,
  resolveLinkTos: true,
  requireMaster: false,
});
`;
