#title #text

# Масшатируемый заголовок

```
<svg viewBox="0 0 10 19" preserveAspectRatio="xMidYMid meet">
    <text>
        <tspan x="0" y="15">css</tspan>
        <tspan x="0" y="34">is</tspan>
        <tspan x="0" y="53">awesome!</tspan>
    </text>
</svg>
```
```
<script>
const rootViewBox = svgRoot.viewBox.baseVal
input
    .addEventListener("input", (event) => {
        const before = el.getBoundingClientRect();
        tspan.textContent = event.target.value;
        const after = el.getBoundingClientRect();
        rootViewBox.width *= after.width / before.width;
    });
</script>
```

[Ответ на главный вопрос в CSS, Михаил Иванкив](https://www.youtube.com/watch?v=cO2-zYzjyD0)