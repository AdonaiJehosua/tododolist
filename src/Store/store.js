import { nanoid } from 'nanoid'
import addSound from '../sounds/addSound.mp3'
import doneSound from '../sounds/doneSound.mp3'
import backSound from '../sounds/backSound.mp3'


export const createTodododoStore = () => {
    return {
        todododosList: [],
        animate: '',
        async addTodo(text) {
            const todo = {
                id: nanoid(),
                content: text,
                done: false
            }
            this.todododosList.push(todo)

            await new Audio(addSound).play()
            this.animate = 'shoked'
            setTimeout(() => {this.animate = ''}, 2700)
        },
        complete(el) {
            this.todododosList = this.todododosList.filter(e => {
                if (e.id === el.id) {
                    e.done = true
                    return e
                }
                else {
                    return e
                }

            })
            new Audio(doneSound).play()
            this.animate = 'happy'
            setTimeout(() => {this.animate = ''}, 1500)
        },
        incomplete(el) {
            this.todododosList = this.todododosList.filter(e => {
                if (e.id === el.id) {
                    e.done = false
                    return e
                }
                else {
                    return e
                }
            })
            new Audio(backSound).play()
            this.animate = 'sad'
            setTimeout(() => {this.animate = ''}, 1500)
        },
        delete(el) {
            let delIndex = this.todododosList.findIndex(e => e.id === el.id)
            this.todododosList.splice(delIndex, 1)
        }
    }
}