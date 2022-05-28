**React - Project Structure**

This is my base template to work on my future projects. 

It's for productivity purposes and not wasting time structuring everything when I start a new project.

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
* Pages => API connectivity related code
* Hooks => custom React Hooks live here
* styles => tailwind.css / css / modules
* helpers => Protected routes
* context => context API 
* Services => Firebase Async Functions (Firebase/firestore)
* Lib => firebase config live here  (Firebase/firestore)

- Eslint Style Guide [Airbnb](https://github.com/airbnb/javascript).
- Run an lint test before each commit [Husky](https://typicode.github.io/husky/#/)


