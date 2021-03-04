import { getLists } from "@/services/search";
export default {
    namespaced:'search',
    state:{
        text:'dva',
        lists:[]
    },
    // 同步的
    reducers:{
        getLists(state,action){
            return {
                ...state,
                lists:Array(10).fill(action.payload)
            }
        }
    },
    // 异步的
    effects:{
        *getListsAsync({payload},{call,put}){
           const res =  yield call(getLists,payload)
            yield put({
                type:'getLists',
                payload:res.lists
            })
        }
    }
}