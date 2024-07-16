<script>
    // ตัวแปรแบบ Array เอาไว้วน loop
    let languages = ["java", "php", "c#", "go", "python"];

    // ตัวแปรเก็บค่าที่เราเลือก default ค่าคือ java
    let selected = "java";
</script>

<select bind:value={selected}>
    {#each languages as item}
        <option value={item}>
            {item}
        </option>
    {/each}
</select>

<div>Your Selected : {selected}</div>
