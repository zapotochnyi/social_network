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
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(responce => {
                return responce.data;
            })
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(responce => {
                return responce.data;
            })
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => {
                return responce.data;
            })
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(responce => {
                return responce.data;
            })
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId)
            .then(responce => {
                return responce.data;
            })
    },

    updateStatus(status) {
        return instance.put('profile/status', {status: status})
            .then(responce => {
                return responce.data;
            })
    }
}

export const authAPI = {

    getAuthUserData() {
        return instance.get('auth/me')
            .then(responce => {
                return responce.data;
            })
    },

    setAuthUserPhoto(id) {
        return instance.get('profile/' + id)
            .then(responce => {
                return responce.data;
            })
    },

    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(responce => {
                return responce.data;
            })
    },

    logout() {
        return instance.delete('auth/login')
            .then(responce => {
                return responce.data;
            })
    },
}

