# Documentation

### Intro

React native application for APIX, this project uses atomic design and flux as main arquitectures.

### Atomic design

[https://bradfrost.com/blog/post/atomic-web-design/](https://bradfrost.com/blog/post/atomic-web-design/)

### Flux

[https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/](https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/)

### Tools

- navigation → react-navigation
- state management
  - redux toolkit
  - redux persist
- Debugger
- typescript

### Installation

- Clone repo
- npm install
- if you have m1 mac see this when install pods
  - `sudo arch -x86_64 gem install ffi`
  - `arch -x86_64 pod install`
    or try with `npx pod-install --repo-update` for flipper problems

### Running app

- npm run ios
- npm run android

### Running debugger

(**Make sure you have installed on your machine React-native-debugger** https://github.com/jhen0409/react-native-debugger

**and redux devtools as chrome extension)**

- run react-native-debugger in your machine or **npm run debug** in proyect folder.
- run Debug with chrome in simulator (cmd-d)

![Untitled](Documentation%2070210641223f40ec9e69e87686b52356/Untitled.png)

# Recommendations

1. this project use typescript paths and barrel files to keep project imports short and to the point.

   please avoid do things like

   ```jsx
   import {Alert} from ‘../../../../components/organism/alert’
   ```

   do this

   ```jsx
   import {Alert} from ‘@example/components/alert’
   ```

   if componet folder has a barrel file use

   ```jsx
   import {Alert} from ‘@example/components’
   ```

   in this way the imports will be clearer for the developer

2. Avoid use hardcoded strings in project, for this create a lang file and assign a key for the text you want to implement in any component. ( **Important, atoms component don’t should be any text)**

   ```jsx
   export enum langs {
   	placeholderFirstName = 'First Name',
   	placeholderLastName = 'Last Name',
   	placeholderConfirmPassword = 'Confirm Password',
   	placeholderEmail = 'Email Address',
   	placeholderPassword = 'Set Password',
   	btnLogin = 'Sign Up',
   }
   ```

3. Try to use export const, this way we can keep the same names in all files

   ```jsx
   export const SignUpForm = () => {

   import {signUpForm} from './signUpForm
   ```

4.

## Scaffold

![Untitled](Documentation%2070210641223f40ec9e69e87686b52356/Untitled%201.png)

- src
  - components ( **main atomic design arquitecture)**
    - atoms
    - molecules
    - organisms
    - wrappers
  - hooks
  - models (**only typescript code interface, types, generics)**
  - navigation **(private an public routes in all application)**
    - private
    - public
  - screens (
    - private
    - public
  - services (**all network api services**)
  - store **( all redux flux files)**
  - styles **( all shared styles try to use this before to make a custom style )**
  - utils **( utils functions, and adapters)**
