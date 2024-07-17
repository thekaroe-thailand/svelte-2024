<script>
    import Swal from "sweetalert2";

    function openModal() {
        Swal.fire({
            title: "My Message",
            text: "Hello",
            icon: "info",
        });
    }

    function confirmModal() {
        Swal.fire({
            title: "Confirm Save",
            text: "save data to database",
            icon: "question",
            showCancelButton: true,
            showConfirmButton: true,
        });
    }
</script>

<div>Settings</div>
<button class="btn btn-primary" on:click={() => openModal()}> Info </button>
<button class="btn btn-primary" on:click={() => confirmModal()}>
    Confirm
</button>
