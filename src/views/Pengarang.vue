<template>
  <div class="mt-3">
    Pengarang
    <b-row>
      <b-col cols="9" class="mt-3">
        <table class="table table-striped table-bordered table-sm">
          <tr>
            <th>
              No
            </th>
            <th>
              Nama
            </th>
            <th>
              Alamat
            </th>
            <th>
              Tempat Lahir
            </th>
            <th>
              Action
            </th>
          </tr>
          <tr v-for="(item, index) in pengarang" :key="index">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              {{ item.nama }}
            </td>
            <td>
              {{ item.alamat }}
            </td>
            <td>
              {{ item.tempat_lahir }}
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
        </table>
      </b-col>
      <b-col>
        <div class="mr-2">
          <div class="text-center">
            Insert Data
          </div>
          <div class="form-group">
            <label for="nama">Nama</label>
            <input
              id="nama"
              type="text"
              v-model="nama"
              class="form-control"
              placeholder="nama"
            />
          </div>
          <div class="from-group">
            <label for="alamat">Alamat</label>
            <input
              id="alamat"
              type="text"
              v-model="alamat"
              class="form-control"
              placeholder="alamat"
            />
          </div>
          <div class="from-group mt-3">
            <label for="tempat lahir">Tempat Lahir</label>
            <input
              id="tempat_lahir"
              type="text"
              v-model="tempat_lahir"
              class="form-control"
              placeholder="tempat lahir"
            />
          </div>
          <div class="mt-3">
            <center>
              <button @click="addPengarangData" class="btn btn-primary">
                add pengarang
              </button>
            </center>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-modal ref="edit-pengarang" title="Edit pengarang" hide-footer>
      <div v-if="selectedData">
        <div>
          update data
        </div>
        <div>
          <input type="text" v-model="selectedData.nama" />
        </div>
        <div>
          <input type="text" v-model="selectedData.alamat" />
        </div>
        <div>
          <input type="text" v-model="selectedData.tempat_lahir" />
        </div>
        <div slot="modal-footer">
          <button @click="updatePengarangData">
            update pengarang
          </button>
          <button @click="hideModal">
            cancel
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("pengarang", ["pengarang"])
  },
  data() {
    return {
      nama: "",
      alamat: "",
      tempat_lahir: "",
      selectedData: null
    };
  },
  methods: {
    ...mapActions("pengarang", [
      "getPengarang",
      "addPengarang",
      "deletePengarang",
      "updatePengarang"
    ]),
    async addPengarangData() {
      const data = {
        nama: this.nama,
        alamat: this.alamat,
        tempat_lahir: this.tempat_lahir
      };
      await this.addPengarang(data);
      this.nama = "";
      this.alamat = "";
      this.tempat_lahir = "";
    },
    async deleteData(id) {
      await this.deletePengarang(id);
    },
    editData(data) {
      this.selectedData = JSON.parse(JSON.stringify(data));
      this.$refs["edit-pengarang"].show();
    },
    async updatePengarangData() {
      await this.updatePengarang(this.selectedData);
      this.selectedData = null;
    },
    hideModal() {
      this.$refs["edit-pengarang"].hide();
    }
  },
  async created() {
    await this.getPengarang();
  }
};
</script>
