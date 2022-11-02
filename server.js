const express = require('express');
const app = express();
const path = require('path');
const bodyPaerser = require('body-parser');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'chapter9-2/build')));
app.use(bodyPaerser.urlencoded({extended: false}));

var keyid = 3;
var userList = [
    {keyid : 1, name: "홍길동", id : "kdhong", passwd: "1111"},
    {keyid: 2, name : "박길동", id : "kdpark", passwd: "1111"}
]

const mainPage = (req, res) => {
    res.sendFile(path.join(__dirname, 'chapter9-2/build/index.html'));
}

const listUsers = (req, res) => {
    console.log("회원명단 조회요청 받음 리액트에게 보냄");
    res.json(userList);
}

const addUser = (req, res) => {
    const {name, id, passwd} = req.body;
    userList.push({keyid: keyid++, name, id, passwd});
    userList.map((user, i) => {

    })
    return res.send('success');
}

app.get("/", mainPage);
app.get("/users", listUsers);
app.post("/users", addUser);

app.listen(65020, () => {
    console.log("listening to 65020");
})