export const IPersistentSubscriptionNakEvents = `
interface IPersistentSubscriptionNakEvents {

  /** PersistentSubscriptionNakEvents subscriptionId */
  subscriptionId: string;

  /** PersistentSubscriptionNakEvents processedEventIds */
  processedEventIds?: (Uint8Array[] | null);

  /** PersistentSubscriptionNakEvents message */
  message?: (string | null);

  /** PersistentSubscriptionNakEvents action */
  action: PersistentSubscriptionNakEvents.NakAction;
}

`;
