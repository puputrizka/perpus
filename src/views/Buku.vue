<template>
  <div class="mt-3">
    <b-row>
      <b-col cols="1">
        <div class="ml-5">
          Buku
        </div>
      </b-col>
      <b-col>
        <div>
          <input
            type="text"
            v-model="filter"
            placeholder="cari"
            class="fa fa-search"
          />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8" class="mt-3">
        <table class="table table-bordered table-striped table-sm table-hover">
          <!-- <thead> -->
          <tr>
            <th>
              No
            </th>
            <th>
              Judul
            </th>
            <th>
              Pengarang
            </th>
            <th>
              Penerbit
            </th>
            <th>
              Action
            </th>
          </tr>
          <!-- </thead> -->
          <!-- <tbody> -->
          <tr v-for="(item, index) in filteredBooks" :key="index">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              {{ item.judul }}
            </td>
            <td>
              <span v-if="item.pengarang">
                {{ item.pengarang.nama }}
              </span>
            </td>
            <td>
              <span v-if="item.penerbit">
                {{ item.penerbit.nama_penerbit }}
              </span>
              <!-- {{ item.penerbit ? item.penerbit.nama_penerbit : "" }} -->
            </td>
            <td>
              <button @click="deleteData(item.id)" class="btn btn-danger ml-4">
                delete
              </button>
              <button @click="editData(item)" class="btn btn-secondary ml-4">
                edit
              </button>
            </td>
          </tr>
          <!-- </tbody> -->
        </table>
      </b-col>
      <b-col>
        <BukuInsert />
      </b-col>
    </b-row>
    <ModalEditBuku />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BukuInsert from "@/components/Buku/Insert";
import ModalEditBuku from "@/components/Buku/ModalEditBuku";

import bus from "@/utils/bus";

export default {
  components: {
    BukuInsert,
    ModalEditBuku
  },
  computed: {
    ...mapGetters("buku", ["books"]),
    filteredBooks() {
      if (this.books.length) {
        return this.books.filter(i =>
          i.judul.toLowerCase().includes(this.filter.toLowerCase())
        );
      }
      return [];
    }
  },
  pengarangOptions() {
    return this.pengarang.map(i => ({
      value: i.id,
      text: i.nama
    }));
  },
  data() {
    return {
      selectedData: null,
      filter: "",
      judul: ""
    };
  },
  methods: {
    ...mapActions("buku", ["getBooks", "addBook", "deleteBook", "updateBook"]),
    async deleteData(id) {
      await this.deleteBook(id);
    },
    editData(data) {
      bus.$emit("open-modal-edit-buku", data);
    }
  },
  async created() {
    await this.getBooks();
  }
};
</script>
