circleci config

```
version: 2.1
orbs:
  cypress: cypress-io/cypress@3
  node: circleci/node@4.0

jobs:
  cypress-run:
    executor:
      name: cypress/default
      node-version: "20.6"
    steps:
      - cypress/install
      - cypress/run-tests:
          cypress-command: "npx wait-on@latest http://localhost:3000 && npx cypress run"
          start-command: "npm run build && npm run start"

workflows:
  build:
    jobs:
      - cypress-run
```
