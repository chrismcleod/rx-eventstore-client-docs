export const ICreatePersistentSubscriptionCompleted = `
interface ICreatePersistentSubscriptionCompleted {

  /** CreatePersistentSubscriptionCompleted result */
  result: CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult;

  /** CreatePersistentSubscriptionCompleted reason */
  reason?: (string | null);
}

`;
