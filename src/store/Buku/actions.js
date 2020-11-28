import axios from "axios";

export default {
  async getBooks({ commit }) {
    const config = {
      method: "get",
      url: "http://localhost:8000/api/buku",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      commit("setBooks", response.data);
      return response;
    } catch (e) {
      return e;
    }
  },
  async addBook({ dispatch }, payload) {
    const config = {
      method: "post",
      url: "http://localhost:8000/api/buku",
      data: payload,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getBooks");
      return response;
    } catch (e) {
      return e;
    }
  },
  async deleteBook({ dispatch }, payload) {
    const config = {
      method: "delete",
      // url: "http://localhost:8000/api/buku/" + payload
      url: `http://localhost:8000/api/buku/${payload}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getBooks");
      return response;
    } catch (e) {
      return e;
    }
  },
  async updateBook({ dispatch }, payload) {
    const config = {
      method: "post",
      url: `http://localhost:8000/api/buku/${payload.id}`,
      data: {
        judul: payload.judul,
        pengarang: payload.pengarang,
        penerbit: payload.penerbit
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const response = await axios(config);
      dispatch("getBooks");
      return response;
    } catch (e) {
      return e;
    }
  }
};
