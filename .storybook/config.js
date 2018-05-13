const { configure } = require('@storybook/react')

const requires = require.context('../src/Web', true, /storybook\.js$/)
const loadStories = () => requires.keys().forEach(requires)

configure(loadStories, module)
