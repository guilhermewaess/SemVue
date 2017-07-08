<p align="center"><a href="https://vuejs.org" target="_blank"><img width="400"src="https://guilhermewaess.github.io/SemVue/static/img/logo.412b713.png"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/guilhermewaess/SemVue/tree/master"><img src="https://img.shields.io/circleci/project/guilhermewaess/SemVue/master.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/guilhermewaess/SemVue?branch=master"><img src="https://img.shields.io/codecov/c/github/guilhermewaess/SemVue/master.svg" alt="Coverage Status"></a>
  <a href="https://www.npmjs.com/package/semvue"><img src="https://img.shields.io/npm/dm/semvue.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/semvue"><img src="https://img.shields.io/npm/v/semvue.svg" alt="Version"></a>
</p>


----------

> Semantic-ui modules/components in you Vue project

## Using

[You can see the docs and demo here](https://guilhermewaess.github.io/SemVue)

``` bash
# install package
npm install semvue --save
```

## Using any component

Simply import in your .vue the component that you want:
``` javascript
import { Modal } from 'semvue';

export default {
  components: {
    Modal,
  },
};
```

## Components so far

 - Accordion
 - Dimmer
 - Dropdown
 - Modal
 - Popup
 - Rating

## To do and improvements
- [x] Accordion
  - [x] Basic Implementation
  - [x] Initialization options override 
- [ ] Checkbox
- [x] Dimmer
  - [x] Basic Implementation
  - [x] Initialization options override 
- [x] Dropdown
  - [x] Basic Implementation
- [ ] Embed
- [x] Modal
  - [x] Basic Implementation
  - [x] Initialization options override 
 - [ ] Nag
 - [x] Popup
   - [x] Basic Implementation
   - [x] Initialization options override 
 - [ ] Progress
 - [x] Rating
   - [x] Basic Implementation
   - [x] Initialization options override 
 - [ ] Search
 - [ ] Shape
 - [ ] Sidebar
 - [ ] Sticky
 - [ ] Tab
------

# Site Demo/Semvue Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm start

# run unit tests
npm run unit

# run all tests
npm test
```
