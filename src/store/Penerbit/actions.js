import axios from "axios";

export default {
  async getPenerbit({ commit }) {
    const config = {
      method: "get",
      url: "http://localhost:8000/api/penerbit",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      commit("setPenerbit", response.data);
      return response;
    } catch (e) {
      return e;
    }
  },
  async addPenerbit({ dispatch }, payload) {
    const config = {
      method: "post",
      url: "http://localhost:8000/api/penerbit",
      data: payload,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getPenerbit");
      return response;
    } catch (e) {
      return e;
    }
  },
  async deletePenerbit({ dispatch }, payload) {
    const config = {
      method: "delete",
      url: "http://localhost:8000/api/penerbit/" + payload,
      //url: `http://localhost:8000/api/penerbit/${payload}`
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getPenerbit");
      return response;
    } catch (e) {
      return e;
    }
  },
  async updatePenerbit({ dispatch }, payload) {
    const config = {
      method: "post",
      url: "http://localhost:8000/api/penerbit/" + payload.id,
      data: {
        nama_penerbit: payload.nama_penerbit,
        alamat: payload.alamat
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getPenerbit");
      return response;
    } catch (e) {
      return e;
    }
  }
};
