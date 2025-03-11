// Utilities
import { defineStore } from "pinia";
import userService from "@/services/api/userService";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
        };
    },
    actions: {
        async login(requestData) {
            try {
                const response = await userService.login(requestData)
                return response
            } catch (error) {
                return error
            }
        },
        async logout() {
            try {
                const response = await userService.logout()
                return response
            } catch (error) {
                return error
            }
        }
    },
});
