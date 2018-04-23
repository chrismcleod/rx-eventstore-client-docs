export const IReadAllEvents = `
interface IReadAllEvents {

  /** ReadAllEvents commitPosition */
  commitPosition: (number | Long);

  /** ReadAllEvents preparePosition */
  preparePosition: (number | Long);

  /** ReadAllEvents maxCount */
  maxCount: number;

  /** ReadAllEvents resolveLinkTos */
  resolveLinkTos: boolean;

  /** ReadAllEvents requireMaster */
  requireMaster: boolean;
}

`;
