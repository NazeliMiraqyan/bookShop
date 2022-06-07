import { createStore, applyMiddleware } from "redux";
import {allReducers} from './reducers/allReducers'
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store=createStore(allReducers,applyMiddleware(thunk))

export type RootStore= ReturnType<typeof allReducers>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector