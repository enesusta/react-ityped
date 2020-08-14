
<br/>

<div align="center"> 

`react-ityped` is a react component that wraps https://www.npmjs.com/package/ityped package

![npm](https://img.shields.io/npm/v/react-ityped?color=pink&style=for-the-badge)
[![CodeFactor](https://www.codefactor.io/repository/github/enesusta/react-ityped/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/enesusta/react-ityped)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-ityped?color=orange&style=for-the-badge)
![NPM](https://img.shields.io/npm/l/kanca?color=blue&style=for-the-badge)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge&color=black)](https://standardjs.com)

</div>



## 🕺 Install

by using `npm`:
```bash
$ npm i react-ityped 
```

by using `yarn`:

```bash
$ yarn add react-ityped
```

## ☕️ Features

Original ityped package already has support for React applications. But it uses DOM directly with html-id.

This situation might be appropriate for react applications `that doesn't use Reach Hook API.` But if you're using react **v16.8 or higher**, you should use `useRef` hook instead of direct DOM access.

What do I mean?

> This example has taken from ityped package.

If you want to check. [link](https://github.com/luisvinicius167/ityped#use-with-reactjs)

```jsx
import React, { Component } from 'react'
import { init } from 'ityped'

export default class Hello extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Use with React.js!', 'Yeah!'] })
    }
    render() {
        return <div id="myElement"></div>
    }
}
```

With `useRef()` hook, we don't require to specify any id on our component. `useRef()` hook does it for us.

In this regards `react-ityped` uses **useRef()** hook to access native DOM element.

## 🎆 Example

```jsx
import React from 'react';
import ITyped from 'react-ityped';
import './index.css';

const Example = () => {

    const strings = ['react-ityped', 'is a', 'react component', 'that wraps npm ityped package.']

    return (
        <ITyped className='container ityped-cursor'
            showCursor={false}
            strings={strings}
            typeSpeed={50}
            backSpeed={50}
            startDelay={100}
            backDelay={250}
        />
    );
}

export default Example;
```

If you want to check more detail about styling, check that [link](https://github.com/luisvinicius167/ityped#css)

```css
// index.
.ityped-cursor {
    font-size: 2.2rem;
    opacity: 1;
    -webkit-animation: blink 0.3s infinite;
    -moz-animation: blink 0.3s infinite;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
}

@keyframes blink {
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes blink {
    100% {
        opacity: 0;
    }
}

@-moz-keyframes blink {
    100% {
        opacity: 0;
    }
}

.container {
    text-align: left;
    font-size: 25px;
    align-self: center;
    margin-left: 3%;
    margin-top: 3%;
}
```

## ⚜️ How does react-ityped looks like?

<br/>

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/ityped/react-ityped-1.gif)



## 🔧 Props

Common props you may want to specify include:


| Name | Type | Discription | Default |
| :--: | :--: | :--: | :--: |
| strings | string[] | An array with the strings that will be animated | `['Put your strings here...', 'and Enjoy!']`
| cursorChar | string | Character for cursor | `"|"`|
| typeSpeed | number | Type speed in milliseconds | 100 |
| backSpeed | number | Type back speed in milliseconds | 50 |
| startDelay | number | Time before typing starts | 50 |
| backDelay | number | Time before backspacing | 500 |
| loop | boolean | The animation loop | false |
| showCursor | boolean | Show the cursor element | true |
| disableBackTyping | boolean | Disable back typing for the last string sentence | false |

<br/>

See the [props documentation](https://github.com/luisvinicius167/ityped#customization) for complete documentation on the props that `react-ityped` supports.



## 📦 Build 

- [Rollup](https://rollupjs.org/) for build process
- [Babel](https://babeljs.io/) for transpilation


## 📜 License

MIT © [Enes Usta](https://github.com/enesusta)
