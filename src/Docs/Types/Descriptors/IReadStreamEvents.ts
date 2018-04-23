export const IReadStreamEvents = `
interface IReadStreamEvents {

  /** ReadStreamEvents eventStreamId */
  eventStreamId: string;

  /** ReadStreamEvents fromEventNumber */
  fromEventNumber: (number | Long);

  /** ReadStreamEvents maxCount */
  maxCount: number;

  /** ReadStreamEvents resolveLinkTos */
  resolveLinkTos: boolean;

  /** ReadStreamEvents requireMaster */
  requireMaster: boolean;
}

`;
