import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  books: []
};

const module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default module;
