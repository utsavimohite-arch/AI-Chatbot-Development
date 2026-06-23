const XLSX = require("xlsx");

function readExcel(path) {
  const workbook =
    XLSX.readFile(path);

  const sheet =
    workbook.SheetNames[0];

  const worksheet =
    workbook.Sheets[sheet];

  return XLSX.utils.sheet_to_json(
    worksheet
  );
}

module.exports = readExcel;