console.log('hello World');
const os =require('os');

console.log('Architecture'+os.arch());
console.log('CPUs'+os.cpus().length);
console.log('OS'+os.platform);

const fs = require('fs');
const fileName = '/home/student/WebstormProjects/AF_Lab04/test.txt';


//read files asynchronously
    fs.readFile(fileName,(err,data) =>{

       if(err){

           console.error(err);
       }
       console.log(data.toString());


    });
//read files synchronously
    const data = fs.readFileSync(fileName);
    console.log(data.toString());

    const fileName1 ='/home/student/WebstormProjects/AF_Lab04/test.txt';
    const outFileName = '/home/student/WebstormProjects/AF_Lab04/test-copy.txt';

    const readStream = fs.createReadStream(fileName1);
    const writeStream = fs.createWriteStream(outFileName);

    readStream.pipe(writeStream);


    readStream.on('data',data=>{

        console.log(data.toString());
    });


    const http = require('http');

    http.createServer((req,res) =>{
        res.setHeader('Content-Type','text/html');

        switch(req.method){
            case 'GET':
                res.write('<h1>Hello World</h1>');
                res.end();
                break;

            case 'POST':
                req.on('data',data=> {


                    res.write('<h1>Hello ' + data + '</h1>');
                    res.end();
                });
                break;
        }
    }).listen(3000,(err)=>{
        console.log('Server is listening to port 3000')

    });

