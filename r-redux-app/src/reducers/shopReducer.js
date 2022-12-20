import productsList from './../data/productsList';

const initStatus = {
    products: [...productsList],
    listCar: []
};
const reducer = (state = initStatus, action)=>{
    switch (action.type) {
        case 'ADD_PRODUCT':
            const {id, name } = action;
            if (initStatus.listCar.length === 0 ) {
                return {
                    ...initStatus,
                    listCar: [{id: id, name: name, quantity: 1}]
                }
            } else {
                const updateCar = [...initStatus.listCar];
                const  isProductInCar = updateCar.filter((p)=>{ return p.id === id }).length > 0;

                if (isProductInCar) {
                    updateCar.forEach((p,i)=>{
                    if (p.id === id) {
                        let quantity = updateCar[i].quantity;
                        updateCar[i] = {id: id, name: name, quantity: quantity+1}
                    }
                    });
                } else {
                    updateCar.push({id: id, name: name, quantity: 1});
                }
                return  {
                    ...state,
                    listCar: updateCar
                }
            }    
        default:
            return state;
    }
    
}

export default reducer;