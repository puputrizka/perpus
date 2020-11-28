<template>
  <div>
    <div class="bg-perpus">
      <div class="login">
        <div class="p-0 mb-2">
          <div class="mt-5 ml-5">
            <div class="col-md-0 mr-5">
              <div class="card bg-light">
                <div class="card-header bg-light mb-0">
                  <h5 class="text-center">
                    <span class="fa fa-home"></span>
                    Please
                    <span class="font-weight-bold text-primary">
                      login
                    </span>
                  </h5>
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="username"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="password"
                      v-model="password"
                    />
                  </div>
                  <div class="form-group custom-control custom checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customControlAutosizing"
                    />
                    <label
                      for="customControlAutosizing"
                      class="custom-control-label"
                      >Remember me</label
                    >
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary btn-block" @click="login">
                      login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeTitle />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import HomeTitle from "./HomeTitle";

export default {
  components: {
    HomeTitle
  },
  data() {
    return {
      email: "a@gmail.com",
      password: "12"
    };
  },
  methods: {
    async login() {
      const config = {
        method: "post",
        url: "http://localhost:8000/api/login",
        data: {
          email: this.email,
          password: this.password
        }
      };
      try {
        const response = await axios(config);
        localStorage.setItem("token", response.data.success.token);
        // this.$router.push("/buku");
        window.location.href = "/buku";
      } catch (e) {
        alert("GAGAL LOGIN!!!");
      }
    }
  }
};
</script>

<style>
.bg-perpus {
  background: darkslategrey;
  background-size: cover;

  overflow-x: hidden;
  color: indianred;
}
.login {
  margin-top: 200px;
  height: 100vh;
  width: 400px;
  float: left;
  margin: 0;
}
</style>
