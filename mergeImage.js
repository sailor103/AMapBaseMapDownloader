const fs = require('fs')
const _ = require('lodash')
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const key = _.parseInt(process.argv[2])
if (key <= 0 || _.isNaN(key)) return

const file = "./downloads/"
let count = 0
const writeArray = []

while (fs.existsSync(`${file}file${key - 1 + key * count}.png`)) {
  console.log(`${file}file${key - 1 + key * count}.png`)
  const keyNodeNumber = count * key
  let nodeNumbers = _.range(keyNodeNumber, keyNodeNumber + key)

  if (count % 2 !== 0) {
    nodeNumbers = _.reverse(nodeNumbers)
  }
  console.log(nodeNumbers)

  const files = _.map(nodeNumbers, (index) => `${file}file${index}.png`)
  console.log(files)

  const command = `convert +append ${files.join(' ')} ${file}line${count}.png`
  console.log(command)

  writeArray.push(exec(command))

  count += 1;
}

Promise.all(writeArray).then(() => {
  console.log('all write----->', count)
  const lineNumbers = _.range(0, count);
  const files = _.map(lineNumbers, (index) => `${file}line${index}.png`)
  const command = `convert -append ${files.join(' ')} ${file}dest.png`
  exec(command).then(() => {
    console.log('Merge image successfully!!!')
  }).catch(err => {
    console.log('merge image error---->', err)
  })
  console.log(command)
}).catch(err => {
  console.log(err)
})
