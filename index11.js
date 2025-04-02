let express = require("express");

let app = express(); //앱서버함수저장
let port = process.env.PORT || 80;

app.use(express.static("public_html"));
app.listen(port, function(){
    console.log("HTML 서버 시작됨");
});
