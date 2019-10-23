
// 获取当前时间的 年、月、日、时、分、秒
let date = new Date();
module.exports =  {
    year: date.getFullYear().toString().slice(2),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
};