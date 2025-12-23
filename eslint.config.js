import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import standard from '@vue/eslint-config-standard-with-typescript'
import eslintPluginAstro from 'eslint-plugin-astro'

// export default [
//   // add more generic rule sets here, such as:
//   // js.configs.recommended,
//   ...eslintPluginAstro.configs.recommended,
//   ...pluginVue.configs['flat/strongly-recommended'],
//   ...vueTsConfigs.recommended,
//   ...vueTsConfigs.stylistic,
//   ...standard,
//   {
//     rules: {
//       // override/add rules settings here, such as:
//       // "astro/no-set-html-directive": "error"
//     }
//   }
// ];
export default defineConfigWithVueTs(
  eslintPluginAstro.configs.recommended,
  pluginVue.configs['flat/strongly-recommended'],
  vueTsConfigs.recommended,
  vueTsConfigs.stylistic,
  standard
)
