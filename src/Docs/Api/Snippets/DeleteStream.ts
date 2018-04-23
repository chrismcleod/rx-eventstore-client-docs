export const DeleteStream = `
client.deleteStream({
  eventStreamId: 'my-stream',
  expectedVersion: 42,
  requireMaster: false,
  hardDelete: true
}).subscribe(result => {
  console.log(result);
})
`;
