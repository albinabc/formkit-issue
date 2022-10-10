import { createI18n } from 'vue-i18n';
import { messages as enUS } from './en-US';
import { messages as svSE } from './sv-SE';

type MessageSchema = typeof enUS;

const i18n = createI18n<[MessageSchema], 'en-US' | 'sv-SE'>({
  legacy: false,
  locale: 'en-US',
  messages: {
    'en-US': enUS,
    'sv-SE': svSE,
  },
});

export { i18n };
