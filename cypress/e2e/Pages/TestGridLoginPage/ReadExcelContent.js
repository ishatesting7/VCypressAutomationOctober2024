const XLSX = require("xlsx")

function readExcel(filePath, sheetname)
{
    const workbook = XLSX.readFile(filePath);
    //Load our excel file
    const sheet = workbook.Sheets(sheetname);
    //Select the Sheet from which we need data
    const data = XLSX.utils.sheet_to_json(sheet);
    //Convert data to JSON Format
    return data;
}

module.exports = {readExcel};

