declare module 'react-sanfona' {
  import { ComponentType } from 'react';

  export interface AccordionProperties {
    allowMultiple?: boolean;	/** Allow multiple items to be open at the same time.	false **/
    openNextAccordionItem?: boolean;	/** Opens the next accordion item after the previous one is closed. Defaults first one as active and applies for each accordion item except the last one.	false **/
    className?: string;	/** Custom classname applied to root element	null **/
    style?: any;	/** Inline styles applied to root element	null **/
    onChange?: (state: any) => any;	/** Triggered when component updates and passes new state as an argument	null **/
    rootTag?: string;	/** Custom HTML tag used for root element	'div' **/
    duration?: number;	/** Open/close transition duration in milliseconds	300 **/
    easing?: string; /** Open/close transition easing. default: easing **/
  }

  export interface AccordionItemProperties {
    title: string | React.ReactElement<any>; /** Text or Object to display in header.	null **/
    expanded: boolean; /** If item body should be expanded or not	false **/
    onExpand?: (...args: any[]) => any; /** Callback for when item is expanded	null **/
    onClose?: (...args: any[]) => any; /** Callback for when item closes	null **/
    className?: string; /** Custom classname applied to root item element	null **/
    bodyClassName?: string; /** Custom classname applied to the accordion item body	null **/
    expandedClassName?: string; /** Custom classname applied when accordion is expanded	null **/
    titleClassName?: string; /** Custom classname applied to accordion item header text	null **/
    disabled?: boolean; /** If item should be disabled or not	false **/
    disabledClassName?: string; /** Custom classname applied to accordion item header text when item is disabled	null **/
    rootTag?: string; /** Custom HTML tag used for root element	'div' **/
    titleTag?: string; /** Custom HTML tag used for title element	'h3' **/
    bodyTag?: string; /** Custom HTML tag used for body element	'div' **/
    duration?: number; /** Open/close transition duration in milliseconds	300 **/
    easing?: string; /** Open/close transition easing	'ease' **/
  }

  export const Accordion: ComponentType<AccordionProperties>;
  export const AccordionItem: ComponentType<AccordionItemProperties>;
}
