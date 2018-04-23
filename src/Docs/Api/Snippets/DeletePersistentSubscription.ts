export const DeletePersistentSubscription = `
client.deletePersistentSubscription({
  subscriptionGroupName: 'my-subscription-group',
  eventStreamId: '$ce-mycategory'
}).subscribe((completion) => {
  console.log(completion.result === 0 ? 'Success' : 'Fail')
});
`;
