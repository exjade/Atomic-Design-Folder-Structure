![](https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png)


This is my Atomic Design boilerplate to work on my projects that require high scalability using a few cool things, like Storybook, etc. 

It's for productivity purposes and not wasting time structuring everything when I start a new project.

I am using my [basic folder structure](https://github.com/exjade/React-Folder-Structure) but focused on working with the [Atomic Design methodology](https://atomicdesign.bradfrost.com/table-of-contents/) and the powerful frontend workshop environment tool: [Storybook](https://storybook.js.org/).

### Atomic Design Concept

- The methodology consists of creating different levels of graphic components.
     - Atoms
     - Molecules 
     - Organisms
     - Templates
     - Pages
      

## Folder Structure 

```bash
  ─ components
       └ atomic
          └ atoms
          └ layout
          └ molecules
  ─ constants 
       └ routes.js
  ─ context API
  ─ error 
       └ ErrorBoundary.js
  ─ helpers
  ─ hooks
  ─ lib
    └ firebase.js
  ─ pages
  ─ services
  ─ stories
     └ atomic
          └ atoms
          └ layout
          └ molecules
  ─ styles
       └ tailwind.css
       └ app.css 
```

* Components => Consisting of HTML and styling
* Components / atomic => Our components folder
* Constants => all routes together for easy access
* Pages => all our Pages
* Hooks => custom React Hooks live here
* styles => tailwind.css / css / modules
* helpers => Protected routes
* context => context API 
* Services => Firebase Async Functions (Firebase/firestore)
* Stories => I'll have stories for each component
* Lib => firebase config live here  (Firebase/firestore)



- Eslint Style Guide [Airbnb](https://github.com/airbnb/javascript).
- Run an lint test before each commit [Husky](https://typicode.github.io/husky/#/)
- Atomic Design Official Website - https://atomicdesign.bradfrost.com/table-of-contents/
- Storybook - https://storybook.js.org/


