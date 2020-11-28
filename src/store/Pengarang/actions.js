import axios from "axios";

export default {
  async getPengarang({ commit }) {
    const config = {
      method: "get",
      url: "http://localhost:8000/api/pengarang",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      commit("setPengarang", response.data);
      return response;
    } catch (e) {
      return e;
    }
  },
  async addPengarang({ dispatch }, payload) {
    const config = {
      method: "post",
      url: "http://localhost:8000/api/pengarang",
      data: payload,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getPengarang");
      return response;
    } catch (e) {
      return e;
    }
  },
  async deletePengarang({ dispatch }, payload) {
    const config = {
      method: "delete",
      url: "http://localhost:8000/api/pengarang/" + payload,
      //url: `http://localhost:8000/api/pengarang/${payload}`
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getPengarang");
      return response;
    } catch (e) {
      return e;
    }
  },
  async updatePengarang({ dispatch }, payload) {
    const config = {
      method: "post",
      url: "http://localhost:8000/api/pengarang/" + payload.id,
      data: {
        nama: payload.nama,
        alamat: payload.alamat,
        tempat_lahir: payload.tempat_lahir
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getPengarang");
      return response;
    } catch (e) {
      return e;
    }
  }
};
