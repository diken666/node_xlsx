// const fs = require('fs');
const xlsx = require('node-xlsx');
const { fileName } = require('./config/config');
const { year, month, date, hour, minute, second } = require('./js/date');

// 读取文件
try {
    let list = xlsx.parse(`../inputFiles/${fileName}.xlsx`);
    console.log(list[0].data);
}
catch (e) {
    console.log(`读取文件失败，请确保【inputFiles】文件夹下，存在【${fileName}】表格文件`);
    console.log(e);
}


//
// // 写文件
// let xlsxObj = [
//     {
//         name: 'firstSheet',
//         data: [
//             ["我的天", 2, 3],
//             [4, 5, 6]
//         ],
//     }
// ];
//
// fs.writeFileSync(`./outputFiles/统计结果_${year}年${month}月${date}日_${hour}时${minute}分${second}秒.xlsx`,xlsx.build(xlsxObj),"binary");
// console.log("./outputFiles/${year}年${month}月${date}日-${hour}:${minute}:${second}_统计结果.xlsx  写入成功！");
