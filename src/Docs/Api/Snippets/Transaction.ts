export const Transaction = `
client.startTransaction({
  eventStreamId: 'my-stream',
  expectedVersion: 42, // stream must be at version 42
  requireMaster: false,
}).switchMap(trx => client.transactionWrite({
  transactionId: trx.transactionId,
  requireMaster: false,
  events: [{/**...**/}],
})).switchMap(trx => client.transactionCommit({
  transactionId: trx.transactionId,
  requireMaster: false,
})).subscribe(result => {
  console.log(result);
})
`;
