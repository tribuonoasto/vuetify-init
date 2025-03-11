<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card class="login-card" elevation="8">
      <v-card-title class="text-center text-h5 font-weight-bold">
        Welcome
      </v-card-title>

      <v-card-text>
        <v-form ref="loginForm" v-model="valid" @submit.prevent="handleLogin">
          <v-text-field
            v-model="username"
            label="Username"
            variant="outlined"
            prepend-inner-icon="mdi-account"
            :rules="[rules.required]"
            class="mb-2"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            variant="outlined"
            prepend-inner-icon="mdi-lock"
            :rules="[rules.required]"
          ></v-text-field>

          <v-btn
            block
            color="#1e2a38"
            class="mt-4"
            type="submit"
            :disabled="!valid"
            :loading="isLoading"
          >
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
import { mapActions, mapWritableState, mapState } from "pinia";

export default {
  data() {
    return {
      username: "",
      password: "",
      valid: false,
      rules: {
        required: (value) => !!value || "Cannot be empty",
      },
      isLoading: false,
    };
  },
  computed: {},
  methods: {
    ...mapActions(useUserStore, ["login"]),
    async handleLogin() {
      const requestData = {
        username: this.username,
        password: this.password,
      };

      this.isLoading = true;
      const response = await this.login(requestData);
      console.log(response);
      if (response.code === 200) {
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 12px;
}
</style>

<route lang="json">
{
  "name": "login",
  "meta": {
    "layout": "login",
    "requiresAuth": false
  },
  "alias": "/"
}
</route>
