import { defineStore } from "pinia";
import { computed, ref } from 'vue';
import { csrfCookie, login, register, logout, getUser } from "../http/auth-api";

export const useAuthStore = defineStore("authStore", () => {

    const isLoggedIn = computed(() => !!user.value);

    const fetchUser = async () => {
        const { data } = await getUser();
    };

    const handleLogin = async (credentials) => {
        await csrfCookie();
        await login(credentials);
        await fetchUser();
    }

    const handleRegister = async (newUser) => {
        await register(newUser);
        await handleLogin({
            email: newUser.email,
            password: newUser.password,
        });
    };

    const handleLogout = async () => {
        await logout();
        user.value = null;
    };

    return {
        user,
        isLoggedIn,
        fetchUser,
        handleLogin,
        handleRegister,
        handleLogout,
    };
})