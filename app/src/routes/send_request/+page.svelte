<script>
  import axios from "axios";
  import config from "../../config";

  async function sendGet() {
    await axios.get(config.apiPath + "/api/book/list");
  }

  const sendPost = async () => {
    const payload = {
      id: 100,
      name: "kob",
      salary: 200000,
    };
    await axios.post(config.apiPath + "/api/book/create", payload);
  };

  async function sendPut() {
    const payload = {
      id: 100,
      name: "kob",
      salary: 1000,
    };

    await axios.put(config.apiPath + "/api/book/update/100", payload);
  }

  async function sendDelete() {
    await axios.delete(config.apiPath + "/api/book/delete/100");
  }
</script>

<div class="pt-5 text-center">
  <button class="btn btn-primary" on:click={() => sendGet()}>GET Method</button>
  <button class="btn btn-success" on:click={() => sendPost()}>
    POST Method
  </button>
  <button class="btn btn-info" on:click={() => sendPut()}>PUT Method</button>
  <button class="btn btn-danger" on:click={() => sendDelete()}>
    DELETE Method
  </button>
</div>
