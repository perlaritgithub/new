import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import {User} from "../user.model";

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');

export const userSelector = createSelector(
    selectUsers,
    (user:readonly User[]) =>{
        return user.map((U: User)=>{
            return {username:U.name  + '_user'};
        });
    }
)