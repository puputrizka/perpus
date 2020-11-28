<template>
  <b-modal id="edit-buku" ref="edit-buku" title="Edit buku" hide-footer>
    <div v-if="selectedData">
      <div>
        update data
      </div>
      <div>
        <input type="text" v-model="editJudul" />
      </div>
      <div>
        <input type="text" v-model="editPengarang" />
      </div>
      <div>
        <input type="text" v-model="editPenerbit" />
      </div>
      <div slot="modal-footer">
        <button @click="updateBookData">
          update book
        </button>
        <button @click="hideModal">
          cancel
        </button>
      </div>
    </div>
  </b-modal>
</template>

<script>
import bus from "@/utils/bus";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      selectedData: null,
      editJudul: "",
      editPengarang: "",
      editPenerbit: ""
    };
  },
  created() {
    bus.$on("open-modal-edit-buku", data => {
      this.selectedData = JSON.parse(JSON.stringify(data));
      this.editJudul = this.selectedData.judul;
      if (this.selectedData.pengarang) {
        this.editPengarang = this.selectedData.pengarang.id;
      }
      if (this.selectedData.penerbit) {
        this.editPenerbit = this.selectedData.penerbit.id;
      }
      this.$root.$emit("bv::show::modal", "edit-buku");
    });
  },
  methods: {
    ...mapActions("buku", ["updateBook"]),
    async updateBookData() {
      await this.updateBook({
        id: this.selectedData.id,
        judul: this.editJudul,
        pengarang: this.editPengarang,
        penerbit: this.editPenerbit
      });
      this.selectedData = null;
      this.hideModal();
    },
    hideModal() {
      this.$refs["edit-buku"].hide();
    }
  }
};
</script>
