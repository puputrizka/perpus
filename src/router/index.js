import Vue from "vue";
import VueRouter from "vue-router";
import Navbar from "../components/Navbar";
import Buku from "../views/Buku.vue";
import Penerbit from "../views/Penerbit.vue";
import Pengarang from "../views/Pengarang.vue";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";

import axios from "axios";

const auth = async (to, from, next) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    const config = {
      method: "post",
      url: "http://localhost:8000/api/details",
      headers: {
        Authorization: "Bearer " + token
      }
    };
    try {
      await axios(config);
      next();
    } catch (e) {
      next({ path: "/home" });
    }
  } else {
    next({ path: "/home" });
  }
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      next({ path: "/home" });
    }
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },

  {
    path: "/buku",
    beforeEnter: auth,
    name: "Page Buku",
    components: {
      navbar: Navbar,
      default: Buku
    }
  },

  {
    path: "/penerbit",
    beforeEnter: auth,
    name: "Page Penerbit",
    components: {
      navbar: Navbar,
      default: Penerbit
    }
  },

  {
    path: "/pengarang",
    beforeEnter: auth,
    name: "Page Pengarang",
    components: {
      navbar: Navbar,
      default: Pengarang
    }
  },

  {
    path: "/home",
    name: "Page Home",
    components: { Home }
  }
  // {
  //   path: "/about",
  //   name: "Page About",
  //   components: { About }
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
