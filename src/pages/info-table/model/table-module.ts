import mock from "./mock.json"
import {getRandomColors} from "@/shared/lib/get-random-colors.ts";

interface DataState {
    city: string,
    population: number,
    cars: number
}


export const tableModule = {
    state: () => {
        return {
            dataTable: mock as DataState[],
            errorMessage: null,

            statisticCity: null,
            statisticPopulation: null
        };
    },
    mutations: {
        ADD_TO_TABLE(state, formData) {
            const existingCityIndex = state.dataTable.findIndex(city => city.city.toLowerCase() === formData.city.toLowerCase());
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
        SET_ERROR_MESSAGE(state, message) {
            state.errorMessage = message
        },
        SET_TOTAL_DATA_CITY(state, getters) {
            const cityStatistic = getters.cityStatistic;
            const backgroundColors = cityStatistic.map((_) => getRandomColors())
            state.statisticCity = {
                labels: cityStatistic?.map(city => city.label),
                datasets: [
                    {
                        backgroundColor: backgroundColors,
                        data: cityStatistic?.map(val => val.value),
                    }
                ]
            };
        },


        SET_TOTAL_DATA_POPULATION(state, getters) {
            const carToPopulationRatio = getters.carToPopulationRatio
            const backgroundColors = carToPopulationRatio.map((_) => getRandomColors())
            state.statisticPopulation = {
                labels: carToPopulationRatio?.map(city => city.label),
                datasets: [{
                    label: "автомобили/жители",
                    backgroundColor: backgroundColors,
                    data: carToPopulationRatio?.map(val => val.value)
                }]
            }

        }
    },

    getters: {
        totalDataTable(state) {
            return state.dataTable;
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
        addToTable({commit, getters}, formData) {
            const cityRegex = /^[A-Za-zА-Яа-я\s-]+$/;
            const populationRegex = /^[1-9]\d*$/;
            const carsRegex = /^[0-9]\d*$/;
            const maxPopulationLength = 9;
            const maxCarsLength = 9;

            if (formData.city && formData.population && formData.cars) {
                if (!cityRegex.test(formData.city)) {
                    console.error('Некорректное название города.');
                    commit("SET_ERROR_MESSAGE", "Некорректное название города");
                    return;
                }
                if (!populationRegex.test(formData.population) || formData.population.length > maxPopulationLength) {
                    console.error('Некорректное население.');
                    commit("SET_ERROR_MESSAGE", "Некорректное население");
                    return;
                }
                if (!carsRegex.test(formData.cars) || formData.cars.length > maxCarsLength) {
                    console.error('Некорректное количество автомобилей.');
                    commit("SET_ERROR_MESSAGE", "Некорректное количество автомобилей");
                    return;
                }
                commit('ADD_TO_TABLE', formData);
                commit('SET_ERROR_MESSAGE', null);
                commit('SET_TOTAL_DATA_CITY', getters);
                commit("SET_TOTAL_DATA_POPULATION", getters);
            } else {
                console.error('Некорректные данные. Заполните все поля.');
                commit("SET_ERROR_MESSAGE", "Некорректные данные");
            }
        },
        setTotalCity({commit,getters}) {
            commit('SET_TOTAL_DATA_CITY', getters);
        },

        setTotalPopulation({commit,getters}){
            commit("SET_TOTAL_DATA_POPULATION",getters)
        }

    }
}
