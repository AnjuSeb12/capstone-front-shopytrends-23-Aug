import { configureStore } from "@reduxjs/toolkit";
import userAuthentication from "./userAuthentication";
import sellerAuthentication from "./sellerAuthentication";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import themeSlice from "./themeSlice.js";
import searchSile from "./searchSile.js";







const store=configureStore({
    reducer:{
        auth:userAuthentication,
        sellerAuth:sellerAuthentication,
        data:productSlice,
        cart:cartSlice,
        theme: themeSlice,
        search: searchSile,

      
      
       

    }
});
export default store;