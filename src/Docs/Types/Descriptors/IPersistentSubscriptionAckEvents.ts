export const IPersistentSubscriptionAckEvents = `
interface IPersistentSubscriptionAckEvents {

  /** PersistentSubscriptionAckEvents subscriptionId */
  subscriptionId: string;

  /** PersistentSubscriptionAckEvents processedEventIds */
  processedEventIds?: (Uint8Array[] | null);
}

`;
