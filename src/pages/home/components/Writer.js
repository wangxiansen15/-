import React, { PureComponent } from "react";
import { WriterWapper, WriterTitle, WriterSwitch, WriterItem, UserName, Content } from '../style';

class Writer extends  PureComponent {
    render() {
        return (
            <WriterWapper>
                <WriterTitle>推荐作者</WriterTitle>
                <WriterSwitch> <span /*ref={(icon) => {this.spinIcon = icon}}*/ className="iconfont spin">&#xe851;</span>换一批</WriterSwitch>
                <WriterItem>
                    <img src="https://upload.jianshu.io/users/upload_avatars/6539412/824c3d2f-b0d2-43a6-885a-d2acd37fd364.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <Content>
                        <h4>棋官kasas</h4>
                        <p>写了389.5k字 4.2k喜欢</p>
                    </Content>
                </WriterItem>
                <WriterItem>
                    <img src="https://upload.jianshu.io/users/upload_avatars/6539412/824c3d2f-b0d2-43a6-885a-d2acd37fd364.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <Content>
                        <h4>棋官kasas</h4>
                        <p>写了389.5k字 4.2k喜欢</p>
                    </Content>
                </WriterItem>
                <WriterItem>
                    <img src="https://upload.jianshu.io/users/upload_avatars/6539412/824c3d2f-b0d2-43a6-885a-d2acd37fd364.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <Content>
                        <h4>棋官kasas</h4>
                        <p>写了389.5k字 4.2k喜欢</p>
                    </Content>
                </WriterItem>
                <WriterItem>
                    <img src="https://upload.jianshu.io/users/upload_avatars/6539412/824c3d2f-b0d2-43a6-885a-d2acd37fd364.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <Content>
                        <h4>棋官kasas</h4>
                        <p>写了389.5k字 4.2k喜欢</p>
                    </Content>
                </WriterItem>

            </WriterWapper>
        )
    }
}

export default Writer;