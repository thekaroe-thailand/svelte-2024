<script>
    import { onMount } from "svelte";

    let users = [
        { id: 100, name: "kob", salary: 200000 },
        { id: 200, name: "Tony", salary: 150000 },
        { id: 300, name: "Mali", salary: 250000 },
    ];
    let sumSalary = 0;

    onMount(() => {
        for (let i = 0; i < users.length; i++) {
            const item = users[i];
            sumSalary += item.salary;
        }
    });
</script>

<div>User</div>
<table class="table table-bordered">
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
        </tr>
    </thead>
    <tbody>
        {#each users as item}
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.salary}</td>
            </tr>
        {/each}
    </tbody>
</table>

<div class="text-center h4 text-primary">
    {sumSalary.toLocaleString("th-TH")}
</div>
