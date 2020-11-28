<template>
  <div class="pr-2">
    <div class="text-center">
      Insert Data
    </div>
    <div class="form-group">
      <label for="nama_penerbit">Nama Penerbit</label>
      <input
        id="nama_penerbit"
        type="text"
        v-model="nama_penerbit"
        class="form-control"
        placeholder="nama penerbit"
      />
    </div>
    <div class="form-group">
      <label for="alamat">Alamat</label>
      <input
        id="alamat"
        type="text"
        v-model="alamat"
        class="form-control"
        placeholder="alamat"
      />
    </div>
    <center>
      <button @click="addPenerbitData" class="btn btn-primary">
        add penerbit
      </button>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
