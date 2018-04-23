export const IConnectToPersistentSubscription = `
interface IConnectToPersistentSubscription {

  /** ConnectToPersistentSubscription subscriptionId */
  subscriptionId: string;

  /** ConnectToPersistentSubscription eventStreamId */
  eventStreamId: string;

  /** ConnectToPersistentSubscription allowedInFlightMessages */
  allowedInFlightMessages: number;
}

`;
