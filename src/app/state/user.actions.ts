import {createAction,props } from "@ngrx/store";
import {User} from "../user.model";
export const addUser= createAction(
    'Add User',
    props<{ name:string }>()
)
export const removeUser = createAction(
    'Remove User',
    props<{ name:string }>()
)
export const ListUsers= createAction(
    'List Users',
    props<{ users:ReadonlyArray<User>}>()
)