export const ReadAllEventsBackward = `
client.readAllEventsBackward({
  commitPosition: externalVariableCommitPosition,
  preparePosition: externalVariablePreparePosition,
  maxCount: 100,
  resolveLinkTos: true,
  requireMaster: false,
});
`;
