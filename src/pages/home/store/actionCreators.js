import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changhomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (list) => ({
    type: actionTypes.ADD_HOMELIST,
    list: fromJS(list)
})

export const toggleTopShow  = (show) => ({
    type: actionTypes.TOGGLE_SCROLL,
    show
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) =>{
            const result = res.data.data;
            const action = changhomeData(result);
            dispatch(action);
        }).catch(() => {
            console.log("发生错误");
        });
    }
};

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) =>{
            const result = res.data.data;
            // const action = changhomeData(result);
            dispatch(addHomeList(result));
        }).catch(() => {
            console.log("发生错误");
        });
    }
};
