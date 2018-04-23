export const IReadEvent = `
interface IReadEvent {

  /** ReadEvent eventStreamId */
  eventStreamId: string;

  /** ReadEvent eventNumber */
  eventNumber: (number | Long);

  /** ReadEvent resolveLinkTos */
  resolveLinkTos: boolean;

  /** ReadEvent requireMaster */
  requireMaster: boolean;
}

`;
