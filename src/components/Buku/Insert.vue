<template>
  <div class="pr-2">
    <div class="text-center">
      Insert Data
    </div>
    <div class="form-group">
      <label for="judul">Judul</label>
      <input
        id="judul"
        type="text"
        v-model="judul"
        class="form-control"
        placeholder="judul"
      />
    </div>
    <div class="form-group">
      <label for="pengarang">Pengarang</label>
      <b-form-select
        v-model="pengarangModel"
        :options="pengarangOptions"
      ></b-form-select>
    </div>
    <center>
      <button @click="addBookData" class="btn btn-primary">
        add buku
      </button>
    </center>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      judul: "",
      pengarangModel: ""
    };
  },
  computed: {
    ...mapGetters("pengarang", ["pengarang"]),
    pengarangOptions() {
      return this.pengarang.map(i => ({
        value: i.id,
        text: i.nama
      }));
    }
  },
  methods: {
    ...mapActions("buku", ["addBook"]),
    ...mapActions("pengarang", ["getPengarang"]),
    async addBookData() {
      const data = {
        judul: this.judul,
        pengarang: this.pengarangModel
      };
      await this.addBook(data);
      this.judul = "";
      this.pengarangModel = "";
    }
  },
  async created() {
    await this.getPengarang();
  }
};
</script>
