<p align="center"> Automation with Playwright. 
    <br> 
</p>

## 📝 Table of Contents

- [Prerequisite](#prerequisite)
- [Framework Setup](#frameworkSetup)
  - [Code Quality Setup (Eslint + Prettier)](#codeQualitySetup)
  - [Useful Commands (To Run The Test Suits)](#usefulCommonds)

## 🧐 Prerequisite <a name = "prerequisite"></a>

- [Node js (recommended version >=14.0.0)](https://nodejs.org)
- [NPM (recommended version >=6.14.0)](https://npmjs.com)

## 🏁 Framework Setup <a name = "frameworkSetup"></a>

```
yarn install
```

### 🥉 Code Quality Setup (Eslint + Prettier) <a name = "codeQualitySetup"></a>

- This framework is using Airbnb Eslint rules to ensure javascript code standards.
- Javascript code is written in ES6.
- This framework is configured with prettier to ensure the code indentation is consistent across.

```
yarn run lint
```

### 👨‍💻 Useful Commands (To Run The Test Suite) <a name = "usefulCommonds"></a>

- To run the test with tag @dev

```
yarn run cucumber:dev
```

- To run the test with tag @smoke

```
yarn run cucumber:smoke
```

- To run the test with tag @regression

```
yarn run cucumber:regression
```
