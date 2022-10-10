import { en, sv } from '@formkit/i18n';
import { generateClasses } from '@formkit/themes';
import { createInput, defaultConfig, DefaultConfigOptions } from '@formkit/vue';

export function formKitConfig() {
  const config: DefaultConfigOptions = {
    locales: {
      en,
      sv,
    },
  };
  return defaultConfig(config);
}