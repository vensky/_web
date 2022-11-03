# Space-between card list
#list #card #layout

```
.list {
	display: flex;
	flex-wrap: wrap;
    justify-content: space-between;
    
    &::after {
        content: "";
        flex-grow: 1;
    }
}
```