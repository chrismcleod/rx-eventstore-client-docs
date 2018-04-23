export const IUpdatePersistentSubscription = `
interface IUpdatePersistentSubscription {

  /** UpdatePersistentSubscription subscriptionGroupName */
  subscriptionGroupName: string;

  /** UpdatePersistentSubscription eventStreamId */
  eventStreamId: string;

  /** UpdatePersistentSubscription resolveLinkTos */
  resolveLinkTos: boolean;

  /** UpdatePersistentSubscription startFrom */
  startFrom: (number | Long);

  /** UpdatePersistentSubscription messageTimeoutMilliseconds */
  messageTimeoutMilliseconds: number;

  /** UpdatePersistentSubscription recordStatistics */
  recordStatistics: boolean;

  /** UpdatePersistentSubscription liveBufferSize */
  liveBufferSize: number;

  /** UpdatePersistentSubscription readBatchSize */
  readBatchSize: number;

  /** UpdatePersistentSubscription bufferSize */
  bufferSize: number;

  /** UpdatePersistentSubscription maxRetryCount */
  maxRetryCount: number;

  /** UpdatePersistentSubscription preferRoundRobin */
  preferRoundRobin: boolean;

  /** UpdatePersistentSubscription checkpointAfterTime */
  checkpointAfterTime: number;

  /** UpdatePersistentSubscription checkpointMaxCount */
  checkpointMaxCount: number;

  /** UpdatePersistentSubscription checkpointMinCount */
  checkpointMinCount: number;

  /** UpdatePersistentSubscription subscriberMaxCount */
  subscriberMaxCount: number;

  /** UpdatePersistentSubscription namedConsumerStrategy */
  namedConsumerStrategy?: (string | null);
}

`;
