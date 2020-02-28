import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showScroll: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                        topicList: fromJS(action.topicList),
                        articleList: fromJS(action.articleList),
                        recommendList: fromJS(action.recommendList),
                    });
        case actionTypes.ADD_HOMELIST:
            return state.set('articleList', state.get('articleList').concat(action.list));
        case actionTypes.TOGGLE_SCROLL:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
}