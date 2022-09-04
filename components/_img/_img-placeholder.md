# Image placeholder
#img 

```
@mixin img-placeholder {
    position: relative;

    &::before {
        background-color: #eee;
        position: absolute;
        height: 100%;
        width: calc(100% - 2px);
        content: '';
        border: 1px dotted rgba(#1c2d43, 0.5);
        display: block;
    }

    &::after {
        content: attr(alt);
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 1px;
        text-align: center;
        font-size: 16px;
        color: #1c2d43;
        font-weight: 400;
    }

    [alt] {
        text-align: center;
        font-size: 16px;
        color: #1c2d43;
    }
}
```
