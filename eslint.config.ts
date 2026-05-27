import antfu from '@antfu/eslint-config'
import storybook from 'eslint-plugin-storybook'

export default antfu({
  type: 'lib',
  formatters: {
    css: true,
  },
}, ...storybook.configs['flat/recommended'])
