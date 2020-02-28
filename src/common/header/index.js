import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { Globalstyle } from '../../statics/iconfont/iconfont';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/loginIn/store';
import { Link } from "react-router-dom";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchInfoSwitch,
    SearchItem
} from './style';

class Header extends Component {
    getListArea(){
        const { focused, list, logout, mouseIn, page, totalPage,  handleMouseEnter, handleMouseLeave,changeItem } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length){
            for (let i = (page - 1) * 10; i < page * 10; i++){
                pageList.push(
                    <SearchItem key={newList[i]}>{newList[i]}</SearchItem>
                )
            }
        }
        if(focused || mouseIn) {
            return(
                <SearchInfo
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                >
                    <SearchTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => changeItem(page,totalPage,this.spinIcon)}><span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>换一批</SearchInfoSwitch>
                    </SearchTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        }
        else
            return null;
    };

    render(){
        const { focused, handleInputFocus, handleInputBlur, login, logout } = this.props;
        return (
            <div>
                <Globalstyle/>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        {
                            login ? <NavItem className='right' onClick={logout}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                        }
                        <NavItem className='right'>
                            <span className="iconfont zoom">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe624;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writting'>
                                <span className="iconfont">&#xe61d;</span>
                                写文章
                            </Button>
                        </Link>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header','list']),
        page: state.get('header').get('page'),
        mouseIn: state.get('header').get('mouseIn'),
        totalPage: state.get('header').get('totalPage'),
        login: state.getIn(['login','login'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        changeItem(page,totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');

            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }
            else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ ( originAngle + 360 ) + 'deg)';
            if(page<totalPage)
                dispatch(actionCreators.cItem(page+1));
            else
                dispatch(actionCreators.cItem(1));
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);