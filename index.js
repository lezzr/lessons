const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require("url");

(async ()=> {
    const ifFile = (filePth) => fs.lstatSync(filePth).isFile()

    http.createServer((req, res)=>{
        const fullPath = path.join(process.cwd(), req.url)
        let linkList = ''
        if (!fs.existsSync(fullPath)) return res.end('not found')
        if (ifFile(fullPath)) return fs.createReadStream(fullPath).pipe(res)

        const urlParams = req.url.match(/[\d\w\.]+/gi)
        if(urlParams){
            urlParams.pop()
            const prevDir = urlParams.join('/')
            linkList = urlParams.length ? `<li><a href="/${prevDir}"><--</li>` : `<li><a href="/"><--</li>`
        }
        fs.readdirSync(fullPath).forEach(fileName => {
            const filePth = path.join(req.url, fileName)
            linkList += `<li><a href="${filePth}">${fileName}</li>`
        })

        const HTML = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8').replace('##links', linkList)

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        return res.end(HTML)
    }).listen(5555)
})()
