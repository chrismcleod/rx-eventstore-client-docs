export const IEventRecord = `
interface IEventRecord {

  /** EventRecord eventStreamId */
  eventStreamId: string;

  /** EventRecord eventNumber */
  eventNumber: (number | Long);

  /** EventRecord eventId */
  eventId: Uint8Array;

  /** EventRecord eventType */
  eventType: string;

  /** EventRecord dataContentType */
  dataContentType: number;

  /** EventRecord metadataContentType */
  metadataContentType: number;

  /** EventRecord data */
  data: Uint8Array;

  /** EventRecord metadata */
  metadata?: (Uint8Array | null);

  /** EventRecord created */
  created?: (number | Long | null);

  /** EventRecord createdEpoch */
  createdEpoch?: (number | Long | null);
}

`;
