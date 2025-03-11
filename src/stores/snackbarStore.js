import { defineStore } from "pinia";

export const useSnackbarStore = defineStore("snackbar", {
    state: () => ({
        isShow: false,
        message: "",
        color: "success",
        icon: "mdi-check",
        locationSnack: "center",
        timer: 5000,
    }),
    actions: {
        showSnackbar({ message, color = "success", icon = "mdi-check", timer = 5000, locationSnack = "top" }) {
            this.message = message;
            this.color = color;
            this.icon = icon;
            this.timer = timer;
            this.locationSnack = locationSnack
            this.isShow = true;
        },
        hideSnackbar() {
            this.isShow = false;
        },
    },
});
