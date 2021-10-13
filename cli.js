const fs = require('fs/promises')
const {lstatSync} = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const yargs =require('yargs')

let currentDir = process.cwd()
let prevDir = {
    fileName: 'PREV PATH',
    path: null,
    isDir: true

}

const options = yargs
    .positional('d', {
    describe: 'Path to dir',
    default: process.cwd()
    })
    .positional('p', {
        describe: 'Pattern',
        default: ''
    }).argv

class ListItem {
    constructor(path, fileName) {
        this.path = path
        this.fileName = fileName
    }
    get isDir(){
        return lstatSync(this.path).isDirectory()
    }
}

const start = async () => {
    const list = await fs.readdir(currentDir)
    const items = list.map((fileName)=>{
        return new ListItem(path.join(currentDir, fileName), fileName)
    })
    items.unshift(prevDir)
    const item = await inquirer
        .prompt([
            {
                name: 'fileName',
                type: 'list',
                message: `Current dir: ${currentDir}`,
                choices: items.map(item => ({name: item.fileName, value: item}))
            }
        ]).then(item => item.fileName);

    if (item.isDir) {
        console.log(item.path)
        prevDir.path = currentDir
        currentDir = item.path
        console.log(prevDir.path)
        return await start()
    } else {
        const data = await fs.readFile(item.path, 'utf-8')
        if (!options.p) {
            console.log(data)
        }
        else {
            const regExp = new RegExp(options.p, 'igm')
            console.log(data.match(regExp))
        }
    }
}

start()
