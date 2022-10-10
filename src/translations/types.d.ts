import 'vue-i18n';
import { messages as enUS } from './en-US';

type MessageSchema = typeof enUS;

declare module 'vue-i18n' {
  // define the locale messages schema
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {
    short: {
      hour: 'numeric';
      minute: 'numeric';
      second: 'numeric';
      timeZoneName: 'short';
      timezone: string;
    };
  }

  // define the number format schema
  export interface DefineNumberFormat {
    currency: {
      style: 'currency';
      currencyDisplay: 'symbol';
      currency: string;
    };
  }
}
