import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import buku from "./Buku";
import penerbit from "./Penerbit";
import pengarang from "./Pengarang";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { buku, penerbit, pengarang }
});
