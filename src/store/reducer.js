import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store/index';
import { reducer as detailReducer} from '../pages/detail/store/index';
import { reducer as login} from '../pages/loginIn/store/index';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: login
});

export default reducer;