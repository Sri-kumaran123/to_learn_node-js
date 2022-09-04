//console.log(process)

console.log(process.argv)

console.log()

process.on('beforeExit',()=>{
    console.log(`First line`)
})
console.log(process)