module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    {
      name: "@storybook/addon-essentials",
      options: {
        background: false,
        actions: false,
        controls: false,
        toolbars: false,
        viewport: false,
      },
    },
  ],
};
