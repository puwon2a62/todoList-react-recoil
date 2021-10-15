import { atom } from 'recoil'
import { ITodoType } from '../interface/todo'

export const todoListState = atom<ITodoType[]>({
  key: 'todoListState',
  default: []
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
})