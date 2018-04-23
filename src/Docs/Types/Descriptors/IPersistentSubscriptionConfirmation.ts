export const IPersistentSubscriptionConfirmation = `
interface IPersistentSubscriptionConfirmation {

  /** PersistentSubscriptionConfirmation lastCommitPosition */
  lastCommitPosition: (number | Long);

  /** PersistentSubscriptionConfirmation subscriptionId */
  subscriptionId: string;

  /** PersistentSubscriptionConfirmation lastEventNumber */
  lastEventNumber?: (number | Long | null);
}

`;
