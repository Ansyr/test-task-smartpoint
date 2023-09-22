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
            cityDataStatistic: []

        }
    },
    mutations: {
        ADD_TO_TABLE(state, formData) {
            state.dataTable.push(formData);
        },
        SET_DATA(state, dataTable) {
            state.dataTable = dataTable;
        },
        SET_TOTAL_DATA(state, totalData) {
            state.totalData = totalData;
        },
    },
    getters: {
        totalDataTable(state) {
            return state.dataTable;
        },
        totalData(state) {
            return state.totalData;
        },
        cityStatistic(state) {
            const totalPopulation = state.dataTable.reduce((total, city) => total + parseFloat(city.population.replace(',', '')), 0);
            return state.dataTable.map(city => ({
                label: city.city,
                value: (parseFloat(city.population.replace(',', '')) / totalPopulation).toFixed(4),
            }));
        },
    },
    actions: {
        addToTable({commit}, formData) {
            commit('ADD_TO_TABLE', formData);
        },

    },
}
