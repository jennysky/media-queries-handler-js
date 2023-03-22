# MediaQueriesHandler



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
