import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
// 定义初始状态为包含多个属性的对象
interface CounterState {
  value: number
  step: number
}

const initialState: CounterState = {
  value: 0,
  step: 1,
}

// 创建切片
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.step
    },
    decrement: (state) => {
      state.value -= state.step
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
  },
})

// 导出切片的 actions
export const { increment, decrement, setStep } = counterSlice.actions

// 配置 Redux store
export const store = configureStore({
  reducer: {
    data: counterSlice.reducer,
  },
})

export { useSelector, useDispatch }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 选择器函数
// export const selectData = (state: RootState) => state.data
