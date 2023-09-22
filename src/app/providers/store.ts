import {createStore} from 'vuex';
import {tableModule} from "@/pages/model/table-module.ts"

export default createStore({
    modules: {
        infoTable: tableModule,
    }
})