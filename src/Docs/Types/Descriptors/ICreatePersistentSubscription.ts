export const ICreatePersistentSubscription = `
interface ICreatePersistentSubscription {

  /** CreatePersistentSubscription subscriptionGroupName */
  subscriptionGroupName: string;

  /** CreatePersistentSubscription eventStreamId */
  eventStreamId: string;

  /** CreatePersistentSubscription resolveLinkTos */
  resolveLinkTos: boolean;

  /** CreatePersistentSubscription startFrom */
  startFrom: (number | Long);

  /** CreatePersistentSubscription messageTimeoutMilliseconds */
  messageTimeoutMilliseconds: number;

  /** CreatePersistentSubscription recordStatistics */
  recordStatistics: boolean;

  /** CreatePersistentSubscription liveBufferSize */
  liveBufferSize: number;

  /** CreatePersistentSubscription readBatchSize */
  readBatchSize: number;

  /** CreatePersistentSubscription bufferSize */
  bufferSize: number;

  /** CreatePersistentSubscription maxRetryCount */
  maxRetryCount: number;

  /** CreatePersistentSubscription preferRoundRobin */
  preferRoundRobin: boolean;

  /** CreatePersistentSubscription checkpointAfterTime */
  checkpointAfterTime: number;

  /** CreatePersistentSubscription checkpointMaxCount */
  checkpointMaxCount: number;

  /** CreatePersistentSubscription checkpointMinCount */
  checkpointMinCount: number;

  /** CreatePersistentSubscription subscriberMaxCount */
  subscriberMaxCount: number;

  /** CreatePersistentSubscription namedConsumerStrategy */
  namedConsumerStrategy?: (string | null);
}

`;
