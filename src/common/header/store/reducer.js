import * as actionType from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionType.SEARCH_BLUR:
            return state.set('focused', false);
        case actionType.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case actionType.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionType.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionType.NEXT_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}