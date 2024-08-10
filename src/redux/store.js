import { configureStore } from "@reduxjs/toolkit";
import userAuthentication from "./userAuthentication";
import sellerAuthentication from "./sellerAuthentication";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
        auth:userAuthentication,
        sellerAuth:sellerAuthentication,
        data:productSlice,
        cart:cartSlice
       

    }
});
export default store;