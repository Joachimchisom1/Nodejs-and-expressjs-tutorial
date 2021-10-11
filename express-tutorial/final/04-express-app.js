const http = require('http')
const {readFileSync} = require('fs');

// Get all files
const homePage = readFileSync('navbar-app/index.html')
const homeStyles = readFileSync('navbar-app/styles.css')
const homeImage = readFileSync('navbar-app/logo.svg')
const homeLogic = readFileSync('navbar-app/browser-app.js')



const server = http.createServer((req, res)=>{
    // user trying to get a request
    // console.log(req.method)
    // requesting for a url
    // console.log(req.url)
    const url = req.url;
    // Home Page
    if (url === '/') {
    // setting up headers
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
}
// Styles
else if (url === '/styles.css') {
    // setting up headers
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end()
} 
// Image/Logos
else if (url === '/logo.svg') {
    // setting up headers
    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeImage)
    res.end()
} 
// Logic
else if (url === '/browser-app.js') {
    // setting up headers
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic)
    res.end()
}
// About Page
else if (url === '/about') {
     // setting up headers
     res.writeHead(200,{'content-type':'text/html'})
     res.write('<h1>About Page</h1>')
     res.end()
} 

// Contact Us page
else if (url === '/contact-us') {
     // setting up headers
     res.writeHead(200,{'content-type':'text/html'})
     res.write('<h1>Contact Us Page</h1>')
     res.end()
} 
// 404
else{
     // setting up headers
     res.writeHead(404,{'content-type':'text/html'})
     res.write('<h1>Page not Found</h1>')
     res.end()
}

})

server.listen(5000)
