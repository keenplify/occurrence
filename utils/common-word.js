const read = require("./read-data");

const commonWord = async (text) => {
  const data = await read("/../genesis.txt");

  const splitted = data.replace(/(\r\n|\n|\r)/gm, " ").split(" ");

  let counter = 0;

  splitted.forEach((_text) => {
    if (_text.toLowerCase().includes(text.toLowerCase())) counter++;
  });

  return counter;
};

module.exports = commonWord;
