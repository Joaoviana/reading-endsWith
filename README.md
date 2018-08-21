# Reading endsWith

general introduction and overview

### Index
* [docs](#docs)
* [input analysis](#input-analysis)
* [part-task](#part-task)
* [recap](#recap)
* [helpful links](#helpful-links)

___

## [Docs](https://lodash.com/docs/4.17.10#endsWith)

> .endsWith([string=''], [target], [position=string.length])

_Behaviour_
Checks if string ends with the given target string.


_Arguments_
```
[string=''] (string): The string to inspect.
[target] (string): The string to search for.
[position=string.length] (number): The position to search up to.
```

_Returns_
```
(boolean): Returns true if string ends with target, else false.
```

_Example_
```js
_.endsWith('abc', 'c');
// => true
 
_.endsWith('abc', 'b');
// => false
 
_.endsWith('abc', 'b', 2);
// => true
```


___

## Input Analysis

| string: to_check | string: to_search | number: starting position
|---|---|---|
| escaped charecters |escaped characters| not + integer |
| wrong type |wrong type  |* neg int
| empty string |  empty string | * pos decimal
| | | * neg decimal |
| | |  * Infinity | 
| | |  * NaN |
| | |  is a pos. int |
| | |  too long |
| | | string number |
| | |  shorter than to_check |
| | |  longer than to_check |
|  | | equal to to_check |




___

## Part-Task

What language features & tricks are used in this function?

Describe them here, and include any helpful exercises in the /exercises folder.

___

## Recap

Summarise what you've learned and struggled with studying this function.

___

## Helpful Links

* [module.exports](https://github.com/elewa-academy/module-dot-exports/tree/master)
* [testing 101](https://github.com/elewa-academy/testing-101) 
  * [Tressa: code coverage](https://medium.com/@WebReflection/js-vanilla-test-code-coverage-7b7ba3740776)  
  * [Tressa: tressa](https://medium.com/@WebReflection/vanilla-js-testing-part-ii-63b9d736121)
* [pure functions, easy testing](https://medium.com/@WebReflection/vanilla-js-testing-part-ii-63b9d736121)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
