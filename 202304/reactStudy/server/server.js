const express = require('express');
const app = express();
const path = require('path');
const cors =require('cors');

const server = require('http').createServer(app);

// const test = require('./Router/test');

// app.use('/api', test);

// const port = 3002;  //node 서버가 사용할 포트 번호, 리액트의 포트번호(3000)와 충돌하지 않게 다른 번호로 할당
// app.listen(port, ()=>{
//     console.log(`Listening on port ${port}`);
// })

app.use(cors());    //cors 미들웨어를 삽입

app.get('/', (req, res) => {    //요청패스에 대한 콜백함수를 넣어준다
    res.send({message: 'hello'});

});

server.listen(8080, () => {
    console.log('server is running on 8080')
})


