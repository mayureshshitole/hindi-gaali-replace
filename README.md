# Simple Hindi Abusive Words replacer

 Use this package if your application is accepting sentences from users, and you want to remove abusive words from it or any word you wish to remove from the user's input and store it with some kinda replacer(ex ***).

This package is helpful in applications that collect inputs from users and again display it on frontend ex. Comments on posts, feedback and posts from users


### Installation
` npm i hindi-gaali-replace --save`

### Import

` const gaaliReplace = require("hindi-gaali-replace"); `

the main function in this package is gaaliReplace

### How to Use?

` gaaliReplace(Sentence, Replacer, YourExtraWords, IgnoreTheseWords) `

Function takes four arguments 
* **Sentence** - Mandatory argument in string
* **Replacer** - String you want to replace with words
* **YourExtraWords** - Array of strings you want to replace which is not present in package
* **IgnoreTheseWords** - Array of strings you want to ignore which is present in package

Common direct use --> 
this returns the filtered string so you can use it directly

```
let a= gaaliReplace("Hello nalayak bewakuf aadmi....")

console.log(a)

//or

console.log(gaaliReplace("Hello nalayak bewakuf aadmi...."))

//output should be "Hello *** bewakuf aadmi...."

```

Add your own replacer--> 
default replacer is '***', pass your own replacer in second argument of function in string format

```
gaaliReplace("Your Sentence here....","###")

```

Add your own Words--> 
it takes array only on third argument
```
gaaliReplace("Your Sentence here....","###",["your word"])

```

Ignore perticular Words--> 
it takes array only on fourth argument
```
gaaliReplace("Your Sentence here....","###",["your word to replace"],["word to ignore"])

```

perticular argument--> 
pass empty to access directly
```
gaaliReplace("Your Sentence here....","###",[],["word to ignore"])

```


## Author
- [@mayureshshitole](https://mayureshshitole.vercel.app)

