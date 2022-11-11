
import React, { useEffect, useState } from "react";
import { Observer } from "mobx-react-lite"
import { useTodododoStore } from "../Context/toDododoContext";
import { Todododo } from "./Todododo";
import shoked from '../img/Shokedbethoven2.svg'
import sad from '../img/SadBethoven.svg'
import happy from '../img/HappyBethoven.svg'


export const ToDododosList = () => {

    const todododoStore = useTodododoStore()

    const [filter, setFilter] = useState('All')







    return <Observer>
        {() => {
            return (
                <div className="listContainer">
                    <div className="blind"></div>
                    <div className="listWrapper">
                        <div className="filterMenu">
                            <button className={`filterMenu_button ${(filter === 'All') && 'active'}`} onClick={() => setFilter('All')}>ToDoDoAll!</button>
                            <button className={`filterMenu_button ${(filter === 'Incomplite') && 'active'}`} onClick={() => setFilter('Incomplite')}>ToDoInHand!</button>
                            <button className={`filterMenu_button ${(filter === 'Complite') && 'active'}`} onClick={() => setFilter('Complite')}>ToDoPerfomed!</button>
                        </div>
                        <div className="listItems">
                            {todododoStore.todododosList.filter((e) => {
                                switch (filter) {
                                    case 'All': return e
                                    case 'Complite': if (e.done) { return e }
                                        break
                                    case 'Incomplite': if (!e.done) { return e }
                                        break
                                    default: return e
                                }
                            }).map(el => {
                                return (
                                    <Todododo key={el.id} el={el} />
                                )
                            })}
                        </div>
                        <img className={`shoked ${todododoStore.animate === 'shoked' && 'animationLeft'}`} src={shoked} />
                        <img className={`happysad ${todododoStore.animate === 'happy' && 'animation'}`} src={happy} />
                        <img className={`happysad ${todododoStore.animate === 'sad' && 'animation'}`} src={sad} />
                    </div>
                    <div className="blind"></div>
                </div>
            )
        }}
    </Observer>
}
