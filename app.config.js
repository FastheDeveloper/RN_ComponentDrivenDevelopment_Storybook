export default ({ config }) => ({
  ...config,
  name: 'Storybook Component Driven Dev',
  slug: 'Storybook Component Driven Dev',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
})
