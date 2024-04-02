const uuid = require("uuid");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Количество ссылок, требующихся сгенерировать? >> ', (answer) => {
  if (!Number(answer) || isNaN(answer)) throw new Error("Требуется ввести исключительно число.");

  const url = "https://link.brawlstars.com/?action=voucher&code=";
  const links = Array.from({ length: answer }, () => `${url}${uuid.v4()}`).join("\n");

  fs.writeFile(`links-${Date.now()}.txt`, links, (error) => {
    if (error) throw new Error("Something went wrong!\n" + error);
    console.log("Ссылки успешно сохранены в текстовый файл.");
  });

  rl.close();
});