import mock from "./mock.json"

interface DataState {
    city: string,
    population: number,
    cars: number
}


export const tableModule = {
    state: () => {
        return {
            dataTable: mock as DataState[],
            errorMessage: null
        };
    },
    mutations: {
        ADD_TO_TABLE(state, formData) {
            const existingCityIndex = state.dataTable.findIndex(city => city.city === formData.city);
            if (existingCityIndex !== -1) {
                const existingCity = state.dataTable[existingCityIndex];
                existingCity.population = String(
                    parseFloat(existingCity.population) + parseFloat(formData.population)
                );
                existingCity.cars = String(
                    parseFloat(existingCity.cars) + parseFloat(formData.cars)
                );
            } else {
                state.dataTable.push(formData);
            }
        },
        SET_ERROR_MESSAGE(state,message){
            state.errorMessage = message
        }
    },
    getters: {
        totalDataTable(state) {
            return state.dataTable;
        },
        totalData(state) {
            return state.totalData;
        },
        cityStatistic(state) {
            const totalPopulation = state.dataTable.reduce((total, city) => total + parseFloat(city.population), 0);
            return state.dataTable.map(city => ({
                label: city.city,
                value: (parseFloat(city.population) / totalPopulation).toFixed(4),
            }));
        },
        carToPopulationRatio(state) {
            return state.dataTable.map(city => ({
                label: city.city,
                value: parseFloat(city.cars) / parseFloat(city.population),
            }));
        },
    },
    actions: {
        addToTable({ commit }, formData) {
            if (typeof formData.city === 'string' && typeof formData.population === 'number' && typeof formData.cars === 'number') {
                commit('ADD_TO_TABLE', formData);
                commit('SET_ERROR_MESSAGE', null);
            } else {
                console.error('Некорректные данные. Заполните все поля.');
                commit("SET_ERROR_MESSAGE","Некорректные данные")
            }
        },
    },
};
