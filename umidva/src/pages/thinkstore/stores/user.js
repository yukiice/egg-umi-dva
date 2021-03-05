export default {
    state: {
        id:undefined,
        username:undefined
    },
    reducers: {
        getUser(state,payload){
            return{
                ...state,
                ...payload
            }
        }
    },
    effects: {
        async getUserAsync(dispatch, getState,payload){
            await new Promise(resolve=>{
                setTimeout(()=>{
                    resolve()
                },2000)
            });
            dispatch({
                type:"getUser",
                payload
            })
        }
        
    }
}