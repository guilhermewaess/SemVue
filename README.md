![](https://guilhermewaess.github.io/SemVue/static/img/logo.412b713.png)

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
 - Dropdown
 - Modal
 - Popup
 - Rating

## To do and improvements
- [ ] Accordion
  - [x] Basic Implementation
  - [ ] Initialization options override 
- [ ] Checkbox
- [ ] Dimmer
- [ ] Dropdown
  - [x] Basic Implementation
  - [ ] Initialization options override
- [ ] Embed
- [ ] Modal
  - [x] Basic Implementation
  - [ ] Initialization options override 
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
