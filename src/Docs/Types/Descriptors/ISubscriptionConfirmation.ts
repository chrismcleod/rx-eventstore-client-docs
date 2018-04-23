export const ISubscriptionConfirmation = `
interface ISubscriptionConfirmation {

  /** SubscriptionConfirmation lastCommitPosition */
  lastCommitPosition: (number | Long);

  /** SubscriptionConfirmation lastEventNumber */
  lastEventNumber?: (number | Long | null);
}

`;
