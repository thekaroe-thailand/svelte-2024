<script>
  import axios from "axios";
  import { onMount } from "svelte";

  let books = [];
  let searchBooks = [];

  onMount(() => {
    fetchData();
  });

  async function fetchData() {
    const res = await axios.get("https://fakerapi.it/api/v1/books");
    books = res.data.data;

    searchBooks = [];

    for (let i = 0; i < books.length; i++) {
      const item = books[i];

      if (item.title.startsWith("A")) {
        searchBooks.push(item);
      }
    }

    console.log(searchBooks);
  }
</script>

<div>ข้อมูลหนังสือ</div>
<ul>
  {#each books as item}
    <li>{item.title}</li>
  {/each}
</ul>
<div>หนังสือที่ขึ้นต้นด้วยตัว A</div>
<ul>
  {#each searchBooks as item}
    <li>{item.title}</li>
  {/each}
</ul>
