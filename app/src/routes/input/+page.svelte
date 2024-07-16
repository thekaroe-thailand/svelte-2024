<script>
    let name = "";

    function changeName() {
        name = "OK new name";
    }
</script>

<div class="container">
    <div class="h3">Input</div>
    <input bind:value={name} />
    <button on:click={changeName} class="btn btn-primary"> click here </button>

    <div>Hello {name}</div>
</div>
