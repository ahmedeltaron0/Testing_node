//http request
/*let http = require('http')
const port = 4000
http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/plain'})
    res.write('hello world!')
    res.end()
}).listen(port,function(){
    console.log(`node running on :${port}`);
})*/



//fs module Async
 /*let fs = require('fs')
 fs.readFile('Trello.txt',function(err,res){
    if(err){
        return console.error(err)
    }
    console.log("Async Read : " + res.toString() )
 })
 console.log("Program End")*/

 //fs module sync 
/*let fs = require('fs')

var data = fs.readFileSync('Trello.txt')
console.log("Async Read : " + data.toString() )
console.log("Program End")*/
// append file 
/*let fs = require('fs');

fs.appendFile('Trello.txt', 'a7la msaaaaa', (err) => {
  if (err) {
    console.error(err)
    return
  }

  console.log("Async operation completed: a7la msaaaaa")
  console.log("saved!")
})*/
//open file 
/*const { error } = require('console')
let fs = require('fs')
fs.open('Trello.txt','w',function(err,file){
    if(err) throw error
    console.log('saved!')

})*/
// write file 
/*let fs = require('fs')
fs.writeFile('Trelloooo.txt','misaaaaa',function(err){
    if(err) throw err
    console.log('saved!')
})*/
// delete file
/*let fs = require('fs')
fs.unlink('trello',function(err){
    if(err) throw err
    console.log('saved!')
})*/
// rename file
/*let fs = require('fs')
fs.rename('Trello.txt','Trelloo.txt',function(err){
    if(err) throw err
    console.log('saved!')
})*/



