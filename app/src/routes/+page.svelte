<script>
    import "./style.css";
    import { goto } from "$app/navigation";

    let message = "Jerry";

    const changeText = () => {
        message = "kob";
    };

    function gotoDashboard() {
        goto("/backoffice/dashboard");
    }
</script>

<div class="panel">Hello {message}</div>
<button on:click={changeText}> Click me for Change text </button>
<button class="btn btn-primary" on:click={() => gotoDashboard()}>
    Go to Dashboard
</button>
