import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "8808ca5d-2f26-47ca-8b67-924c9874edc5"
    }
})

export const usersAPI = {

    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`);
    },

    followUser(id) {
        return instance.post(`follow/${id}`);
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`);
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get('profile/' + userId);
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },

    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    }
}

export const authAPI = {

    getAuthUserData() {
        return instance.get('auth/me');
    },

    setAuthUserPhoto(id) {
        return instance.get('profile/' + id);
    },

    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },

    logout() {
        return instance.delete('auth/login');
    },
}

