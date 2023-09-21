interface DataState{
    city: string,
    population: string,
    cars: string
}


export const tableModule = {
    state: () => {
        return {
            dataTable: [] as DataState[],
        }
    },
    mutations: {
        ADD_TO_TABLE(state,formData){
            state.dataTable.push(formData)
        },
        SET_DATA(state,dataTable){
            state.dataTable = dataTable
        }
    },
    getters: {
        totalDataTable(state){
            return state.dataTable
        }
    },
    actions: {
        addToTable({commit},formData){
            commit('ADD_TO_TABLE',formData)
        },

        async fetchData () {
            try {
                const response = await fetch("/mock.json")
                const data = await response.json()

                console.log(data)
                // commit('SET_DATA',[...state.dataTable,...data])

                console.log(data)
            }catch (error){
                console.log(`Ошибка при загрузке данных`,error)
            }
        }
    },

}