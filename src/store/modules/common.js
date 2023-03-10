export const commonModule = {
    namespaced: true,
    state() {
        return {
            isLoading: false,
            isError: {
                status:null,
                msg: null,
            },
        }
    },
    mutations: {
        SET_LOADING(state, status) {
            state.isLoading = status;
        },
        SET_ERROR(state, error) {
            state.isError.status = true;
            state.isError.msg = error
        },
        CLEAR_ERROR(state) {
            state.isError.status = null;
            state.isError.msg = null;
        },
    },
    actions: {
        setLoading({
            commit
        }, status) {
            commit('SET_LOADING', status)
        },
        setError({
            commit
        }, error) {
            commit('SET_ERROR', error)
        },
        clearError({
            commit
        }) {
            commit('CLEAR_ERROR')
        },
    },
    getters: {
        loading(state) {
            return state.isLoading;
        },
        error(state) {
            return state.isError.status
        },
        message(state) {
            return state.isError.msg
        }
    }
}