# Copy object

#object

Заканчивайте использовать `JSON.parse(JSON.stringify(obj))` для дублирования (aka глубокого копирования aka deep copy) объектов в JavaScript.  
  
Такой метод игнорирует даты, функции, неопределённые значения и не работает с циклическими зависимостями.  
  
Уже достаточно давно имеется [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone).  
  
Наличествует во всех современных браузерах, есть [полифилл](https://github.com/zloirock/core-js#structuredclone).