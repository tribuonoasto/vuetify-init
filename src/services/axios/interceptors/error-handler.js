import router from "@/router";
import { useSnackbarStore } from "@/stores/snackbarStore";

export default (instance) => {
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            const errorData = error.response?.data;
            const snackbarStore = useSnackbarStore();

            if (errorData?.code === 401) {
                router.push("/");
            }

            snackbarStore.showSnackbar({
                message: errorData?.message || "Something went wrong.",
                color: "error",
                icon: "mdi-alert-circle",
            });

            return Promise.reject(error);
        }
    );
};
