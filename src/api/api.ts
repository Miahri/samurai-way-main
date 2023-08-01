import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c85010c8-14b3-4039-b4af-7e02411657e5"
    }
})

export const userAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data;
            })
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(res => {
                return res.data;
            })
    },
    follow(userId: string) {
        axios.post(`follow/${userId}`)
            .then(res => {
                return res.data;
            })
    }
}

export const profileAPI = {
    getUserProfile (userId: string) {
        return instance.get(`profile/` + +userId);
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
            .then(res => {
                return res.data;
            })
    }
}

