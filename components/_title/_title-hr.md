

# Title HR
#text #title #hr
```
<style>
h2 {
    --s: 3px;
    /* the thickness */
    --c: red;
    /* the color */
    --w: 100px;
    /* the width */
    --g: 10px;
    /* the gap */
    border: 1px solid;
    border-image:
        linear-gradient(#0000 calc(50% - var(--s)/2),
        var(--c) 0 calc(50% + var(--s)/2),
        #0000 0) 0 1/0 var(--w)/0 calc(var(--w) + var(--g));
}

h2 {
    font-size: 2rem;
    margin: 20px auto;
    width: fit-content;
}

body {
    font-family: system-ui, sans-serif;
}
</style>
<h2>I am a Title</h2>
<h2 style="--g:50px;--c:purple">Adding some gap </h2>
<h2 style="--w:100vw;--c:blue;--s:7px">Title</h2>
<h2 style="--c:green;--s:5px;--w:50px;--g:20px">Another Title</h2>
```