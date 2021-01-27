# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is maintained by C11 members. All contributions are welcome

# Feature

- [React](https://reactjs.org/docs/getting-started.html) - Function component - Typescript
- [Context Api](https://reactjs.org/docs/context.html) - use react context effectively with hooks
- Multi layout
- Router with [react-router-dom](https://reactrouter.com/web/guides/quick-start) (private, public and restricted routes). I highly recommend you check out [this post](https://kentcdodds.com/blog/stop-using-client-side-route-redirects) and [this post](https://kentcdodds.com/blog/authentication-in-react-applications) to understand the way we should implement our app routing
- [Custom hooks](https://reactjs.org/docs/hooks-intro.html). I also recommend you read posts on [this site](https://usehooks.com/) to create and re-use hooks.
- [Axios](https://github.com/axios/axios) config http status and cancel request w/ hook
- unmounted hook
- Error handle with [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
- Localization with [react-i18next](https://react.i18next.com/getting-started)
- [sass](https://sass-lang.com/guide) and [css module](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
- [yarn](https://yarnpkg.com/)
- Automated Code Linting with `husky`, `lint-staged` and `pre-commit`
- ...and more

# Script

1. Start: `yarn start`
2. Build: `yarn build`
3. Lint: `yarn lint`
4. Format: `yarn prettier`

# Environment

`Node: ^14`

# IDE

1. Suggestion for vscode: (optional)

   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - Create file `.prettierrc` at root folder

   ```json
   {
     "singleQuote": true,
     "semi": true,
     "trailingComma": "all"
   }
   ```

   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - **[Settings Sync](https://github.com/shanalikhan/code-settings-sync)**

     **Use Public GitHub Gist. Read the details [here](https://dev.to/shanalikhan/how-to-share-your-visual-studio-code-settings-and-extensions-39k)**

     Refer to my configuration on GitHub Gist: `39c7c93d80f3110422b3a77794423203`

     **Font: [Fira Code](https://github.com/tonsky/FiraCode)**

     **Terminal font: [Powerlevel10k](https://github.com/romkatv/powerlevel10k) - [Oh my zsh](https://github.com/ohmyzsh/ohmyzsh)**

# Folder structure

1. Coding convention uses airbnb rules

- [Javascript](https://github.com/airbnb/javascript)
- [React](https://github.com/airbnb/javascript/tree/master/react)
- [CSS-in-JS](https://github.com/airbnb/javascript/tree/master/css-in-javascript)
- [CSS & Sass](https://github.com/airbnb/css)
- File and folder name is `kebab-case`

2. `src` folder

```
  components // shared components
  -- group-components
  ---- component-c1.tsx
  ---- compoennt-c2.tsx
  ---- index.ts // use named export for all of components
  -- component-a
  ---- index.tsx
  ---- component-a.scss
  -- ...
  -- index.ts // use named export for all of components
  configs // global configs
  -- http-client.ts // config axios instance
  -- http-status.ts // config http status
  context // global context
  -- app-provider-example.tsx
  -- user-provider-example.tsx
  helpers // helper or utilities function
  hooks // react custom hooks
  layouts // master layout
  pages
  -- user
  ---- components
  ------ list-users.tsx
  ------ other-component.tsx
  ------ ...
  ------ index.ts // use named export for all of components
  ---- index.tsx
  ---- type.ts // local interface or type
  routes // all of routes (private, public and restricted)
  -- config.tsx
  -- index.tsx
  services // manage calls to APIs
  styles // global style
  theme // required when using CSS-IN-JS or custom UI toolkit like MaterialUI, ant-design, ...
  types // global interfaces or types
  -- index.d.ts
```

3. Named Export

```typescript
// ComponentA.tsx
export const ComponentA: React.FC = () => <></>;
```

```typescript
// ComponentB.tsx
export const ComponentB: React.FC = () => <></>;
```

```typescript
// index.ts
export * from './ComponentA';
```

```typescript
// how to use
// AnyComponent
import { ComponentA, ComponentB } from './components';
// or
import * as ComponentC from './components';
```

4. Interface & Type

```
export interface IUser {
    name: string;
    email: string;
    ...
}

export type TMember = {
    name: string;
    email: string;
    ...
}
```

# How to start?

1. Run `yarn start`
2. Access link `http://localhost:3000/` and play with login feature
3. Read example codes
4. Run `yarn rme` to remove example files
5. Check your terminal and remove import missing files in `components/index.ts`, `App.tsx`, `index.tsx`, `routes/config.tsx`
6. Create a new component inside folder `components`
7. Create a new page inside folder `pages`
8. Update available routes in `routes/config.tsx`
9. Check at `http://localhost:3000/` again
