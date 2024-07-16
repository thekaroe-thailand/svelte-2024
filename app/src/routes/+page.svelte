<script>
    import "./style.css";

    let message = "Jerry";

    const changeText = () => {
        message = "kob";
    };
</script>

<div class="panel">Hello {message}</div>
<button on:click={changeText}> Click me for Change text </button>
