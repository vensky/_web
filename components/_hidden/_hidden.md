# Hidden

1. Убрать из a11y-дерева: `aria-hidden="true"`

2. Исключить из порядка навигации с клавиатуры: `tabindex="-1"`

3. Скрыть визуально: `class="visuallyhidden"`

   .visuallyhidden { 

   border: 0;

   clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; white-space: nowrap; }

4. <div class="modal" role="dialog" 	aria-labelledby="modalTitle" 	aria-describedby="modalDesc" >   <h2 id="modalTitle">Заголовок окна</h2>   <p id="modalDesc">Описание окна</p> </div>

## Закрытие окна

- Кнопка Закрыть (✕)
- Кнопка Отменить
- Клавиша Escape
- Клик по оверлею (за пределами окна)

```
<button aria-label="Закрыть">✕</button>
```

или

```html
<button aria-label="Закрыть" class="close"></button>
```

function handleKeyDown (event) { const keyCode = event.keyCode || event.which; if (keyCode === 27) { 	// закрыть модальное окно 	event.preventDefault(); } } document.addEventListener('keydown', handleKeyDown);



[github.com/theKashey/focus-lock](https://github.com/theKashey/focus-lock)

```
setFocus(topNode, lastNode)
```

ReactJS:

```
<FocusLock><Modal /></FocusLock>
```

Подробнее в [статье](https://habrahabr.ru/post/338130/)



.modal {  overflow: auto; } body { overflow: hidden; }