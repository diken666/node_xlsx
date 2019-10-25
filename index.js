// const fs = require('fs');
const xlsx = require('node-xlsx');
const { fileName } = require('./config/config');
const { year, month, date, hour, minute, second } = require('./js/date');
const { Console } = require('./js/console');

// 读取文件
try {
    if ( fileName.endsWith('.xls') || fileName.endsWith('.xlsx') ) {
        Console("success", "开始读取【" + fileName + "】...");
        let list = xlsx.parse(`./inputFiles/${fileName}`);
        console.log(list[0].data);
    }
    else {
        let len = fileName.split('.').length;
        let fileType = fileName.split('.')[len - 1];
        if ( fileType && len !== 1 ) {
            Console("fail", "不支持读取【" + fileType + "】文件类型")
        } else {
            Console("fail",'配置文件名时，未写入文件后缀名')
        }

    }

}
catch (e) {
    Console("fail", e.toString())
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
