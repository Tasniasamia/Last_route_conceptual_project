import { getShoppingCart } from "./Localstorage_function/fakedb";

const loaddata=async()=>{
    let newArray=[];
    const fetchdata=await fetch('products.json');
    const data=await fetchdata.json();
   
    let getfromlocalStorage=getShoppingCart();
    console.log(getfromlocalStorage);
    for(let id in getfromlocalStorage){
        let datafilter=data.find(index=>index.id===id);
        if(datafilter){
           datafilter.quantity=getfromlocalStorage[id];
    newArray.push(datafilter);

        }
    }
    return newArray;
}
export default loaddata;