export const INewEvent = `
interface INewEvent {

  /** NewEvent eventId */
  eventId: Uint8Array;

  /** NewEvent eventType */
  eventType: string;

  /** NewEvent dataContentType */
  dataContentType: number;

  /** NewEvent metadataContentType */
  metadataContentType: number;

  /** NewEvent data */
  data: Uint8Array;

  /** NewEvent metadata */
  metadata?: (Uint8Array | null);
}

`;
