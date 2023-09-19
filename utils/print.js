import * as Print from "expo-print";
import { shareAsync } from 'expo-sharing';

export const print = async (html, toFile = false) => {
  if (toFile) {
    const { uri } = await Print.printToFileAsync({ html });
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  } else {
    await Print.printAsync({
      html,
    });
  }
};

export const getHtmlTemplate = (printData) => {
  let printDataHtml = "";
  printData.forEach((dt) => {
    printDataHtml += `<tr>
        <td>${dt.number}</td>
        <td>${dt.price}</td>
        <td>${dt.totalPrice}</td>
      </tr>`;
  });
  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
  <table>
  <thead>
    <tr>
      <th>数量</th>
      <th>单价</th>
      <th>总价</th>
  </thead>
  <tbody>${printDataHtml}</tbody>
</table>
  </body>
</html>
`;
  return html;
};
