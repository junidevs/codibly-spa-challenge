# 🚀 React + TypeScript + Vite 🚀

## ✨ Features

- React for building user interfaces with a component-based architecture.
- TypeScript for adding static type definitions to JavaScript, enhancing code quality and understandability.
- Vite as the build tool, offering out-of-the-box support for TypeScript, JSX, CSS and Hot Module Replacement (HMR).
- ESLint configured with a focus on React and TypeScript best practices.

## 🌟 What Could Be Improved

- Further customization of ESLint rules for specific project needs.
- MSW

## 🛠 Used Technologies

- **Vite** for a fast and modern development experience. 🚀
- **React** for efficient and expressive UI development. 🎨
- **TypeScript** for scalable and maintainable codebases. 📝
- **ESLint** for code quality and consistency, with rules optimized for React and TypeScript. ✨

## 🎛 Expanding the ESLint Configuration

For a production application, consider enhancing the ESLint configuration to enable type-aware linting rules:

1. Update the top-level `parserOptions` in your ESLint configuration:
    ```js
    export default {
      // other rules...
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    }
    ```
2. Switch from `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked`
   or `plugin:@typescript-eslint/strict-type-checked` for stricter type checks.
3. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked` for stylistic rules.
4. Install `eslint-plugin-react` and include `plugin:react/recommended` & `plugin:react/jsx-runtime` in the `extends`
   list for React-specific linting rules.

## 🚀 Vite Plugins

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**:
  Utilizes Babel for Fast Refresh, enhancing the development experience by allowing instant feedback.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Leverages SWC for Fast Refresh,
  offering a highly performant alternative to Babel.

## 🚀 Setup and Installation

1. Clone this template to start your project.
2. Install dependencies using your preferred package manager:
    ```bash
    yarn install
    # or
    npm install
    ```
3. Start the development server
    ```bash
    npm run dev
    ```
![image](https://github.com/junidevs/codibly-spa-challenge/assets/52135894/9c995b99-1232-4b20-9b60-1b6a8145913c)


