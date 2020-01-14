

# <p align="center">Scaffold React + Typescript + Rollup</p>

This repo is a scaffolding project which comprise of following


- React
- Typescript
- React Router
- Redux & Redux Saga
- Rollup for building
- Jest ( TS Jest )
- StoryBook

## Usage

```zsh
# installation
$ `npm install`

# build in development mode
$ `npm run dev`

# development + watch mode
$ `npm run dev:watch`

# build production mode
$ 'npm build'

# running story book
$ 'npm storybook'

```
**Directory structure as follows** <br>
- src <br>
    - assets <br>
    - common <br>
    - components <br>
    - pages <br>
    - public <br>
    - modules <br>
    - styles <br>
    - tests <br>
    - translations <br>
    - utils <br>
- App.tsx <br>
- i18n.ts <br>
- index.ts <br>

src is a root folder where all the source files resides <br>

### **assets**
    All the assets files like images can be placed here<br>

### **common**
common reducers, actions, types and store entry file can be added here. App the API service can be part of this folder. These components will be used across the projects. Components should not contain any store code and application logic. These can be called as ATOMS <br>

### **components**
All the base / dumb components should be residing here. These components will be used across the projects. <br>
Components should not contain any store code and application logic. These can be called as ATOMS <br>

### **pages**
Screen / Layout components will be created in this folder. These can contain pages as a feature or a layout 
which contains specific layout associated the screens. These can be also used as a based screen / layout for a feature
or for a route. This can be called as ORGANISMS

### **public** 
This folder will hold all the statics files which will be used for running the app.<br>
e.g.: environment based template html's e.g. dev.html & prod.html. <br>

### **modules**
We have all the feature associated with the application created here. They can have a sub-folder with feature name <br>
e.g. : a dummy folder **home** and **ssl** is created which has the following <br>
- **home** <br>
    - **components** <br>
        Dumb / Base components for this feature which is specific to the feature should be part of this directory. 
        This can be discussed is this required or not? As we have a components folder as part of the top 
        level directory structure will be used across the applications.
    - **containers** <br>
        Components which are connected to the store / Smart components which is part of this feature should be part of this directory. This can be called as MOLECULES
    - **actions.ts** <br>
        All the actions related to this feature will be available here.
    - **reducers** <br>
        A folder created if there multiple reducers in the future to be broken down. This will hold all the reducers associated with the feature.
    - **types.ts** <br>
        All the types / constants for the feature will be created on this. <br>

- **common** <br>
        This can hold a common actions / reducers and types which can be used by any feature. The directory structure can remain the same.

### **styles** <br>
    This is still debatable. Do you still want to have this structure where styles are separate or should be part of component / container components folder ? We can discuss this <br>

### **tests** <br>
    Same can be said for the tests folder as well. We can take it up in the next meeting.

### **translations** <br>
    This folder contains all the translations associated with the application.The structure should be as follows
- locales
    - en {Language}
        - translation.json {All Translation [key: value]}

- Following dependencies are used as part of translation <br>
    - i18next
    - i18next-browser-languagedetector
    - i18next-xhr-backend <br>
- Points to be discussed <br>
    - The translation has been defined in the PO files. Some questions regarding this are
        - We should completely move out of PO files and create translations from scratch? Cost involved ? Right approach?
        - We should stick to the current process of creating a PO file and should have intermediate process to convert them to translation.json which will be consumed by the i18next ?

- We will be trimming / removing translation keys which are not be used as part of the final build.
- **i18next-scanner** is the npm module which scan source, extract translation keys/values, and merge them into i18n resource files. 
This will be run a separate script as part of the build. **i18next-scanner.config.js** is the configuration file

    Repo link : https://github.com/i18next/i18next-scanner <br>


### App.tsx <br>
    App Component which be the starting Components for the app <br>
 
### <b>i18n.ts</b> <br>
    This file contains all the i18n related configuration for translations <br>

### index.ts <br>
    This is the entry files of the project which will be used in index.html as a starter script <br>


