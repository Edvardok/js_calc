"use strict";
function main() {
  //поиск DOM елементов
  const output = document.querySelector(".output");
  const operations = document.querySelector(".operations");
  const digits = document.querySelector(".digits");
  const actions_list = document.querySelector(".actions_list");
  //---

  //создание функций управления output
  function setText(text) {
    output.textContent = text;
  }

  function getText() {
    return output.textContent;
  }

  function modifyText(event) {
    const button = event.target;
    let text = getText();
    if (output.textContent == "0") {
      text = button.textContent;
    } else {
      text = output.textContent + button.textContent;
    }
    setText(text);
  }

  function equalsActions() {
    const expretion = getText();
    const result = eval(expretion);
    setText(result);
  }
  //---

  //сброс значения output
  setText("0");
  //---

  //создание действия для кнопок digits
  const digits_array = Array.from(digits.children);

  function forEachDigit(digitElement) {
    digitElement.addEventListener("click", modifyText);
  }
  digits_array.forEach(forEachDigit);

  //создание действия для кнопок actions

  const actions_array = Array.from(actions_list.children);

  function forEachActionButton(actionElement) {
    if (actionElement.id == "equals") {
      actionElement.addEventListener("click", equalsActions);
    } else {
      actionElement.addEventListener("click", modifyText);
    }
  }
  actions_array.forEach(forEachActionButton);
  //---

  const operations_array = Array.from(operations.children);

  const allClear = operations_array[0];
  const changeSign = operations_array[1];
  const percent = operations_array[2];

  //очистка
  function textClear() {
    setText("0");
  }
  allClear.addEventListener("click", textClear);
  //--

  //смена знака
  function changeSignToAnother() {
    let text = getText();
    let textAddSign = "(" + text + ")" + "*(-1)";
    let multipli = eval(textAddSign);
    setText(multipli);
  }
  changeSign.addEventListener("click", changeSignToAnother);
  //---

  //проценты
  function percentCalc() {
    let text = getText();
    let textAddPercent = "(" + text + ")" + "/100";
    let divide = eval(textAddPercent);
    setText(divide);
  }
  percent.addEventListener("click", percentCalc);
  //---
}

main();
