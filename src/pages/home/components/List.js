import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from "react-router-dom";

class List extends  PureComponent {
    render() {
        const { list, getMoreList } =this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={"/detail/" + item.get('id')}>
                                <ListItem >
                                    <img className='ListPic' src={item.get('imgUrl')} alt=""/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='dlc'>
                                            {item.get('dlc')}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={getMoreList}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) =>({
    list: state.getIn(['home','articleList'])
});

const mapDispatch = (dispatch) => ({
    getMoreList() {
        dispatch(actionCreators.getMoreList());
    }
});

export default connect(mapState,mapDispatch)(List);