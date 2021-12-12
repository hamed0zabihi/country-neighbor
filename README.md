# In name of Allah

Nilva React Code Challange

## Introduction

we want you to design and implement a simple single web page app which will use the blow `public API` to request and fetch some data and do the specified tasks below.

```bash
https://travelbriefing.org/api
```

## Tasks

- fetch a list of `10 random, unique` countries from the list of countries in the endpoint below. e.g. Canada, USA, Japan, etc.

```bash
https://travelbriefing.org/countries.json
```

each country will have its own endpoint. e.g.:

```bash
https://travelbriefing.org/Netherlands?format=json
```

this response will be an object with a key of `neighbors`

check the 10 countries to see which countries are `mutual neighbors`. this means these countries have each other in their `neighbors` field. e.g.:

```bash
{name: 'Canada', neighbors: [{name: 'USA', ...},...]}

{name: 'USA', neighbors: [{name: 'Canada',...},...]}
```

are mutual neighbors.

- feel free to display the mutual neighbors in any way that makes sense to you. Note: if you find that `Canada` and `USA` are mutual neighbors, you should only display the pair once.
- if none of the chosen countries had no mutual neighbors, simply display a message in a desired way and sat that `there are no mutual neighbors in the chosen countries` then please display the selected countries as well.
- `fork` this repository, develop your code, and push it to your forked branch. when you think your code is ready, simply just raise a `pull request` here.

## Expectations

- a clean structure of codebase and components
- clean and readable code practice
- ability to layout pages correctly
- responsive and simple design
- well and optimized API calls

## Notes

- please write your app in ReactJS, no backend necessary.
- please `do not` use any libraries to select the random countries or find neighbors.
- feel free to use any boilerplate to quickly set up the app. eg: `CRA`
- don't hesitate to take your time and review others written codes, and by the way contact us for more information and help, we're reachable on scheduled time.
- it would be better to write a simple and brief `README.md` file.

## Suggested techs

take your time and make a review on these techs. we would gladly provide you with the required information and useful documents about each one of `ordered preferred` techs listed below.

- main framework: [ReactJS](https://reactjs.org/), [NextJS](https://nextjs.org/), [Ionic](https://ionicframework.com/), ...
- style framework: [SASS](https://sass-lang.com/), [LESS](https://lesscss.org/), [Tailwind](https://tailwindcss.com/), ...
- item and icons packages: [Material-Ui](https://material-ui.com/), [bootstrap](https://getbootstrap.com/), ...
- data fetching: [axios](https://github.com/axios/axios), fetch
- state management: [Redux toolkit](https://redux-toolkit.js.org/), [React-Redux](https://redux.js.org/), [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext), ...


