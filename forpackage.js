// npm init
//npm init -y
//npm i <packagename>

const _=require('lodash')

const item=[1,[4,[6]]]
const newitem=_.flattenDeep(item)
console.log(newitem)