<script setup lang="ts">
import { inject, watch } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const { t } = useI18n();
i18n.locale.value = 'sv-SE';

const config = inject<{locale: string}>(Symbol.for('FormKitConfig'));
if(!config) throw new Error;
config.locale = 'sv-SE'

watch(i18n.locale, (locale) => {
  config.locale = locale;
});

const updateLocale  = () => {
  if(i18n.locale.value === 'sv-SE') {
    i18n.locale.value = 'en-US';
  } else {
    i18n.locale.value = 'sv-SE'
  }
}

</script>

<template>
  <div>
  Current Locale: {{i18n.locale.value}}
    </div>
<button @click="updateLocale">Swap Language </button>
    <br>
    <br>
  <FormKit type="form">
    <FormKit
      type="email"
      :label="t('personalDetails.email')"
      placeholder="email@example.com"
      validation="required|email"
    />
  </FormKit>
</template>

<style>
a {
  margin-bottom: 2em;
}
small {
  margin-top: 1em;
  color: SlateGray;
}
</style>
