# MediaQueriesHandler

Use in js file
```js

<script src="https://media-queries-handler.s3.amazonaws.com/media-queries-handler-1.0.0.min.js"></script>

```



```js

const ITEM_MEDIA_QUERIES = {
    '(max-width: 300px)': {
        width: '100px',
        backgroundColor: "orange"
    },
    '(min-width: 300px)': {
        width: '300px',
        backgroundColor: "yellow"
    },
    '(min-width: 600px)': {
        width: '500px',
        backgroundColor: "green"
    },
    '(min-width: 1000px)': {
        width: '900px',
        backgroundColor: "blue"
    },
};

  handler = new MediaQueriesHandler();
  const node = document.getElementById("my-item");
  handler.addQueries([node], ITEM_MEDIA_QUERIES)

```
