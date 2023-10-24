import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore("user", () => {

    const token = ref<string>("")
    const setToken = (value: string): void => {
        token.value = value;
    }

    return {
        token,
        setToken
    }
})