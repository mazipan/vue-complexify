# vue-complexify

[![License](https://img.shields.io/github/license/mazipan/vue-complexify.svg?maxAge=3600)](https://github.com/mazipan/vue-complexify) 
[![Github Issue](https://img.shields.io/github/issues/mazipan/vue-complexify.svg?maxAge=3600)](https://github.com/mazipan/vue-complexify/issues) 
[![GitHub Fork](https://img.shields.io/github/forks/mazipan/vue-complexify.svg?maxAge=3600)](https://github.com/mazipan/vue-complexify/network/member) 
[![GitHub Star](https://img.shields.io/github/stars/mazipan/vue-complexify.svg?maxAge=3600)](https://github.com/mazipan/vue-complexify/stargazers) 

[![version](https://img.shields.io/npm/v/vue-complexify.svg)](https://www.npmjs.com/package/vue-complexify)
[![downloads monthly](https://img.shields.io/npm/dm/vue-complexify.svg)](https://www.npmjs.com/package/vue-complexify) 
[![downloads](https://img.shields.io/npm/dt/vue-complexify.svg)](https://www.npmjs.com/package/vue-complexify) 


Vuejs porting library from jquery.complexify.js

## Dependency
For now, still using library :
+ [node-complexify](https://github.com/kislyuk/node-complexify)

## How to use

#### Import plugins
```javascript
import VueComplexify from 'vue-complexify'
Vue.use(VueComplexify, {})
```

#### Using in component
```javascript
this.$evalPasswordComplexity(passwordText, this.callback)
```

#### Callback parameter
```javascript
function callback(err, valid, complexity) {
  console.log(err, valid, complexity)
}
```

## Credit
+ [node-complexify](https://github.com/kislyuk/node-complexify) by [kislyuk](https://github.com/kislyuk)
+ [jquery.complexify.js](https://github.com/danpalmer/jquery.complexify.js/) by [danpalmer](https://github.com/danpalmer)


**Hope will usefull for you all.**

## Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) 
[![Website](https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600)](https://mazipanneh.com/blog/)
[![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) 

[![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan) 
[![Linkedin](https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600)](https://id.linkedin.com/in/irfanmaulanamazipan) 
[![Slideshare](https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600)](https://www.slideshare.net/IrfanMaulana21) 