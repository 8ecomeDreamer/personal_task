// 此处对store进行合并
import { IF_Login } from './actionType'

const defaultStore = {
  IF_Login: true
}

export default (state = defaultStore, action) => {
    switch (action.type) {
        case IF_Login:
            return { ...state, IF_Login: !state.IF_Login }
        default:
            return state
    }
}