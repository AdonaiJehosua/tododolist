import { useTodododoStore } from "../Context/toDododoContext";
import { Observer } from "mobx-react"
import { toDo } from "../Store/store";

export const Todododo = ({ el }: { el: toDo }) => {
    const todododoStore = useTodododoStore()

    return (
        <Observer>
            {() => {
                return (
                    <div className={`todododoItem ${(el.done) && 'done'}`}>
                        {(el.done) && <button className="todododoItem_delButton"
                        onClick={() => {todododoStore?.delete(el)}}>{'✖'}</button>}
                        <div className="todododoItem_content">{el.content}</div>
                        <button className="todododoItem_button"
                            onClick={() => {
                                el.done ? todododoStore?.incomplete(el) : todododoStore?.complete(el)
                            }}
                        >{el.done ? 'ToDoDoBack!' : 'ToDoDoDone!'}</button>
                    </div>
                )
            }}
        </Observer>
    )
}