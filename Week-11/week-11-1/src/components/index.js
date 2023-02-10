import { createStore } from 'redux';

const initialState={
    isLightOn:true,
};
const reducer=(state=initialState,action)=>{
    if(action.type===true){
        return {
            isLightOn:true,
        };
    }else{
        return {
            isLightOn:false,
       };
    };

};

const store=createStore(reducer);

export default store;