<template>
    <v-snackbar
      v-model="isShow"
      :color="color"
      :timeout="timer"
      :location="locationSnack"
    >
      <v-icon left class="mr-5">{{ icon }}</v-icon>
      {{ message }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="hideSnackbar">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </template>
  
  <script>
  import { mapState, mapActions, mapWritableState } from "pinia";
  import { useSnackbarStore } from "@/stores/snackbarStore";
  
  export default {
    name: "vtoast",
    computed: {
      ...mapState(useSnackbarStore, ["message", "color", "icon", "timer", "locationSnack"]),
      ...mapWritableState(useSnackbarStore, ["isShow"])
    },
    methods: {
      ...mapActions(useSnackbarStore, ["hideSnackbar"]),
    },
  };
  </script>
  