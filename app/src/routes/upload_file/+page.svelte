<script>
  import axios from "axios";
  import config from "../../config";

  let yourFile = null;

  async function sendFileToSerer() {
    let formData = new FormData();

    if (yourFile !== undefined) {
      if (yourFile.length > 0) {
        formData.append("myImage", yourFile[0]);
        await axios.post(config.apiPath + "/api/user/upload", formData);
      }
    }
  }
</script>

<div class="container mt-3">
  <div>Choose Your File</div>
  <input class="form-control" type="file" bind:files={yourFile} />

  <button class="btn btn-primary" on:click={() => sendFileToSerer()}>
    Send to Server
  </button>
</div>
