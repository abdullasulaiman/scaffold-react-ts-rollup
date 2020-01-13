

# <p align="center">Scaffold React + Typescript + Rollup</p>

This repo is a scaffolding project which comprise of following

    1) React
    2) Typescript
    3) React Router 
    4) Rollup for building
    5) Jest ( TS Jest )
    6) StoryBook

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
Directory structure as follows
    src
        assets
        components
        pages
        public
        store
        styles
        tests
        translations
        utils
    App.tsx
    i18n.ts
    index.ts

src is a root folder where all the source files resides

### assets
    All the assets files like images

### components
    All the base components / dumb components should be residing here. These components will be used across the projects. 
    These components should not contain any store code and application logic. These can be called as ATOMS

### pages
    Screen / Layout components will be created in this folder. These can contain pages as a feature or a layout 
    which contains specific layout associated the screens. These can be also used as a based screen / layout for a feature
    or for a route.

### public 
    This folder will hold all the statics files which will be used for running the app.
    e.g.: environment based template html's e.g. dev.html & prod.html.

### store {we can suggest a better name for this folder}
    We have all the feature associated with the application created here. They can have a sub-folder with feature name
        e.g. : a dummy folder home and ssl is created which has the following
            components 
                Dumb / Base components for this feature which is specific to the feature should be part of this directory.
                This can be discussed is this required or not? As we have a components folder as part of the top
                level directory structure will be used across the applications
            containers
                Components which are connected to the store / Smart components which is part of this feature should be part
                of this directory.
            actions.ts
                All the actions related to this feature will be available here.
            reducers 
                A folder created if there multiple reducers in the future to be broken down. This will 
                hold all the reducers associated with the feature.
            types.ts
                All the types / constants for the feature will be created on this.

    common 
        This can hold a common actions / reducers and types which can be used by any feature. The directory structure can
        remain the same.

### styles
    This is still debatable. Do you still want to have this structure where styles are separate or should be part of 
   component / container components folder ? We can discuss this

### tests
    Same can be said for the tests folder as well. We can take it up in the next meeting

### translations 
    This folder contains all the translations associated with the application.
    The structure should be as follows
        locales
            - en {Language}
                - translation.json {All Translation [key: value]}

    Following dependencies are used as part of translation 
    i18next, i18next-browser-languagedetector, i18next-xhr-backend
    // Points to be discussed
    The translation has been defined in the PO files. Some questions regarding this are
        1) We should completely move out of PO files and create translations from scratch? Cost involved ? Right approach?
        2) We should stick to the current process of creating a PO file and should have intermediate process to convert them to 
           translation.json which will be consumed by the i18next ? 

    We will be trimming / removing translation keys which are not be used as part of the final build.
    i18next-scanner is the npm module which scan source, extract translation keys/values, and merge them into i18n resource files.
    This will be run a separate script as part of the build. i18next-scanner.config.js is the configuration file

    Repo link : https://github.com/i18next/i18next-scanner


### App.tsx
    App Component which be the starting Components for the app

### i18n.ts
    This file contains all the i18n related configuration for translations

### index.ts
    This is the entry files of the project which will be used in index.html as a starter script


