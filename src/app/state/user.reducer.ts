
import {User} from "../user.model";
import {createReducer, on} from "@ngrx/store";
import { addUser, ListUsers, removeUser } from "./user.actions";
// import { create } from "domain";
// import { state } from "@angular/animations";
export const initialState:ReadonlyArray<User> = [];

export const UserReducer = createReducer(
    initialState,
    on(addUser,(state, {name})=>{
        console.log(name);
        let user : User ={
            name:name
        };
        return [...state,user];
    }),
    on(removeUser,(state,{name})=>{
        // console.log('remove' +name);
        let users = state.filter((user)=>user.name !=name);
        
        return users;
    }),
    on(ListUsers,(state,{users}) =>{
        console.log(users);
        return users;
    })
)