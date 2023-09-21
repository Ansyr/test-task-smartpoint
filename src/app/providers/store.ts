import {createStore} from 'vuex';
import {tableModule} from "@/pages/ui/table-page/model/table-module.ts"

export default createStore({
    modules: {
        infoTable: tableModule,
    }
})