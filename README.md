**React - Project Structure**

This is my Atomic Design template to work on my projects that require high scalability. 

It's for productivity purposes and not wasting time structuring everything when I start a new project.

I am using my [basic folder structure](https://github.com/exjade/React-Folder-Structure) but focused on working with the [Atomic Design methodology](https://atomicdesign.bradfrost.com/table-of-contents/) and the powerful frontend workshop environment tool: [Storybook](https://storybook.js.org/).


## Folder Structure 

```bash
  ─ components
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
  ─ styles
       └ tailwind.css
       └ app.css 
```

* Components => Consisting of HTML and styling
* Constants => all routes together for easy access
* Pages => all our Pages
* Hooks => custom React Hooks live here
* styles => tailwind.css / css / modules
* helpers => Protected routes
* context => context API 
* Services => Firebase Async Functions (Firebase/firestore)
* Lib => firebase config live here  (Firebase/firestore)

- Eslint Style Guide [Airbnb](https://github.com/airbnb/javascript).
- Run an lint test before each commit [Husky](https://typicode.github.io/husky/#/)
- Atomic Design Official Website - https://atomicdesign.bradfrost.com/table-of-contents/
- Storybook - https://storybook.js.org/


