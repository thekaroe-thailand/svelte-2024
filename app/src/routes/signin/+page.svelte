<script>
    let username = "";
    let password = "";
    let valid = false;
    let remember = false;

    function handleSignIn() {
        if (username == "admin" && password == "admin") {
            valid = true;
        } else {
            valid = false;
        }
    }
</script>

<div class="container m-5">
    {#if valid}
        <div class="alert alert-success">Welcome to System</div>
    {/if}

    <div class="card">
        <div class="card-header">SignIn</div>
        <div class="card-body">
            <div>Username</div>
            <input class="form-control" bind:value={username} />

            <div class="mt-3">Password</div>
            <input class="form-control" type="password" bind:value={password} />

            <div class="mt-3">
                <input type="checkbox" bind:checked={remember} />
                จดจำฉันไว้

                <button class="btn btn-primary" on:click={handleSignIn}>
                    Sign In Now
                </button>
            </div>

            {#if remember}
                <div class="alert alert-warning mt-3">คุณกำหนดให้จดจำ</div>
            {:else}
                <div class="alert alert-info mt-3">
                    ยังไม่ได้กำหนดให้จดจำค่า
                </div>
            {/if}
        </div>
    </div>
</div>
