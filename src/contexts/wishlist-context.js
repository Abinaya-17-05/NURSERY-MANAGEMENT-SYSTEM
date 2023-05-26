import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {toast} from 'react-hot-toast';
import getWishlistService from "../services/wishlist-services/getWishlistService";
import { useAuth } from "./auth-context";
import { useReducer } from "react";
import wishlistReducer, { initialWishlistState } from "../reducers/wishlistReducer";
import {wishlistActionTypes} from "../constants/constants"
import addToWishlistService from "../services/wishlist-services/addToWishlistService";
import removeFromWishlistService from "../services/wishlist-services/removeFromWishlistService";

export const WishlistContext = createContext();

export const WishlistProvider = ({children}) =>{

    const {token} = useAuth();
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialWishlistState);
    const [isLoading, setIsLoading] = useState(false);

    const {DISPLAY_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} = wishlistActionTypes;

    const getWishlist = async() =>{
        setIsLoading(true);
        try {
            const response = await getWishlistService(token);
            const {status, data: {wishlist}} = response;
            if(status === 200){
                wishlistDispatch({ type: DISPLAY_WISHLIST, payload: wishlist});
            }
        } catch (error) {
            console.log(error);
        } finally{
            setIsLoading(false);
        }
    }

    const addToWishlist = async(product) => {
        try {
           const response = await addToWishlistService(product, token);
           const {status, data: {wishlist}} = response;
           if(status===201){
            wishlistDispatch({type: ADD_TO_WISHLIST, payload: wishlist});
            toast.success('Plant added to favorites!');
           }
        } catch (error) {
            console.log(error);
            toast.error("Not able to add to favorites.");
        }
    }

    const removeFromWishlist =async({_id: productId}) =>{
        try {
            const response = await removeFromWishlistService(productId, token);
            const {status, data: {wishlist}} = response;
            if(status === 200){
                wishlistDispatch({type: REMOVE_FROM_WISHLIST, payload: wishlist});
                toast.success('No longer favorite plant!');
            }
        } catch (error) {
            console.log(error);
            toast.error("Unable to remove from favorites.");
        }
    }

    const isPresentInWishlist = (product) => wishlistState.wishlist.findIndex(({_id})=> _id === product._id);

    useEffect(()=>{
        getWishlist();
    },[token])

    return(
        <WishlistContext.Provider value={{wishlistState, wishlistDispatch, isLoading, addToWishlist,removeFromWishlist, isPresentInWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext);