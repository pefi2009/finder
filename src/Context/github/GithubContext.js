import { createContext,useReducer,useState } from "react";
import GithubReducer from './GithubReducer'
const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const Gamal = ({children}) => {
    const initialState = {
        users:[],
        loading:false 
         }
        const [state,dispatch] = useReducer(GithubReducer,initialState)


            const useClear = () => {
                dispatch({
                    type:'SET_CLEAR',
                  
                })
            }    
        
            const searchUsers = async(text) => {
            const params = new URLSearchParams({
                q:text
            })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`
            }
        }) 
        const {items} = await response.json()
       
        dispatch({
            type:'GET_USERS',
            payload:items
        })
        const setLoading = dispatch({
            type:'SET_LOADING',
            
        }) 
    }
   
    return( <GithubContext.Provider 
        value={{
             users:state.users,
             loading:state.loading,
             searchUsers,
             useClear}}>
                   {children}
            </GithubContext.Provider>
   )
}

export default GithubContext