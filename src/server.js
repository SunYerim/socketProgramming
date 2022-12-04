/*express를 import, express application composition,
    view engine을 pug로 setting, view 디렉토리 설정, public 파일들에 대해서도 동일한 작업
    public 파일들은 frontend에서 구동되는 코드
    server.js => BackEnd에서 구동, app.js => FrontEnd에서 구동*/
import express from "express";
//import http from "http";
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");
app.listen(3000, handleListen);

// server.js에서 실행시 3000번 포트에 서버가 실행되게 추가함.
/* Express로 할 일은 view를 설정해주고 render해주는 것 나머지는 websocket으로 실시간으로*/
