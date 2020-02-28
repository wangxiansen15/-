import React, { PureComponent } from "react";
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import {
    HomeWrapper ,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends  PureComponent {

    handleScrollTop(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://edu-image.nosdn.127.net/84c5223a2a244d23bdc8de7c9dc115a1.jpg?imageView&quality=100" alt='' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 400)
            dispatch(actionCreators.toggleTopShow(true));
        else
            dispatch(actionCreators.toggleTopShow(false));
    }
});

export default connect(mapState, mapDispatch)(Home);