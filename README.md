# React &larr;&rarr; Lit Element Interop

### Experiments in common React patterns/tools and how well they play with lit-element and web components.

Known web component and React compatibility issues https://custom-elements-everywhere.com/#react

## Environment

- React 17.0.1
- Lit Element 1.19.1

## Test Domains

- Slots

  - dynamic slot content (setting slot content via React prop changes)

- Forms

  - Updating form elements that are web components with React

- State tools

  - Updating web component content based on a global state system like Redux or Zustand

## React + Web Components Tools

- https://github.com/BBKolton/reactify-wc
- https://github.com/skatejs/val
- https://www.fast.design/docs/integrations/react

## Usage

Install dependencies:
```
yarn
```

Run storybook
```
yarn storybook
```