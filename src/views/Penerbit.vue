<template>
  <div class="mt-3">
    Penerbit
    <b-row>
      <b-col cols="8" class="mt-3">
        <table class="table table-striped table-bordered table-sm">
          <tr>
            <th>
              No
            </th>
            <th>
              Nama Penerbit
            </th>
            <th>
              Alamat
            </th>
            <th>
              Buku
            </th>
            <th>
              Action
            </th>
          </tr>
          <tr v-for="(item, index) in penerbit" :key="index">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              {{ item.nama_penerbit }}
            </td>
            <td>
              {{ item.alamat }}
            </td>
            <td>
              <span v-if="item.buku">
                {{ item.buku.judul }}
              </span>
            </td>
            <td>
              <button @click="deleteData(item.id)" class="btn btn-danger ml-5">
                delete
              </button>
              <button @click="editData(item)" class="btn btn-secondary ml-4">
                edit
              </button>
            </td>
          </tr>
        </table>
      </b-col>
      <b-col> </b-col>
    </b-row>
    <b-modal ref="edit-penerbit" title="Edit penerbit" hide-footer>
      <div v-if="selectedData">
        <div>
          update data
        </div>
        <div>
          <input type="text" v-model="selectedData.nama_penerbit" />
        </div>
        <div>
          <input type="text" v-model="selectedData.alamat" />
        </div>
        <div slot="modal-footer">
          <button @click="updatePenerbitData">
            update penerbit
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
    ...mapGetters("penerbit", ["penerbit"])
  },
  data() {
    return {
      nama_penerbit: "",
      alamat: "",
      selectedData: null
    };
  },
  methods: {
    ...mapActions("penerbit", [
      "getPenerbit",
      "addPenerbit",
      "deletePenerbit",
      "updatePenerbit"
    ]),
    async addPenerbitData() {
      const data = {
        nama_penerbit: this.nama_penerbit,
        alamat: this.alamat
      };
      await this.addPenerbit(data);
      this.nama_penerbit = "";
      this.alamat = "";
    },
    async deleteData(id) {
      await this.deletePenerbit(id);
    },
    editData(data) {
      this.selectedData = JSON.parse(JSON.stringify(data));
      this.$refs["edit-penerbit"].show();
    },
    async updatePenerbitData() {
      await this.updatePenerbit(this.selectedData);
      this.selectedData = null;
    },
    hideModal() {
      this.$refs["edit-penerbit"].hide();
    }
  },
  async created() {
    await this.getPenerbit();
  }
};
</script>
