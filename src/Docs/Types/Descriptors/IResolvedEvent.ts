export const IResolvedEvent = `
interface IResolvedEvent {

  /** ResolvedEvent event */
  event?: (IEventRecord | null);

  /** ResolvedEvent link */
  link?: (IEventRecord | null);

  /** ResolvedEvent commitPosition */
  commitPosition: (number | Long);

  /** ResolvedEvent preparePosition */
  preparePosition: (number | Long);
}

`;
