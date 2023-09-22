import mock from "./mock.json"

interface DataState {
    city: string,
    population: string,
    cars: string
}


export const tableModule = {
    state: () => {
        return {
            dataTable: mock as DataState[],
        }
    },
    mutations: {
        ADD_TO_TABLE(state, formData) {
            state.dataTable.push(formData)
        },
        SET_DATA(state, dataTable) {
            state.dataTable = dataTable
        }
    },
    getters: {
        totalDataTable(state) {
            return state.dataTable
        }
    },
    actions: {
        addToTable({commit}, formData) {
            commit('ADD_TO_TABLE', formData)
        },
    }

}