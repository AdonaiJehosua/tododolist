import { Observer } from 'mobx-react-lite'
import { useTodododoStore } from '../Context/toDododoContext'
import { useState } from 'react'


export const TodododoSetter = () => {

    const todododoStore = useTodododoStore()
    const [value, setValue] = useState("")

    return (
        <Observer>
            {() => {
                return (
                    <div className='todododoSetter'>
                        <input type="text" placeholder="ToDoDoType!" className='todododoSetter_input' value={value} onChange={(e) => setValue(e.target.value)} />
                        <button className='todododoSetter_button'
                            onClick={() => {
                                if (value !== "") {
                                    todododoStore?.addTodo(value)
                                }
                                setValue("")
                            }}>ToDoDoAdd!</button>
                    </div>
                )
            }}
        </Observer>
    )
}