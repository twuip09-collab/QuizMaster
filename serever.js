const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Главная страница
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Файл оформления
app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "style.css"));
});

// Вопросы теста
app.get("/quiz.js", (req, res) => {
    res.sendFile(path.join(__dirname, "quiz.js"));
});

app.listen(PORT, () => {
    console.log(`QuizMaster запущен на порту ${PORT}`);
});