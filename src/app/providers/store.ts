import {createStore} from 'vuex';
import {tableModule} from "@/pages/info-table/model/table-module.ts"

export default createStore({
    modules: {
        infoTable: tableModule,
    }
})