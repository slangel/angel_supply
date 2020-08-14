import React from 'react';

import Dialog from '../../components/Dialog';

import Style from './Download.less';
import Common from './Common.less';

interface DownloadProps {
    visible: boolean;
    onClose: () => void;
}

function Download(props: DownloadProps) {
    const { visible, onClose } = props;
    return (
        <Dialog className={Style.download} visible={visible} title="下载APP" onClose={onClose}>
            <div className={Common.container}>
                <div className={Common.block}>
                    <p className={Common.title}>Android</p>
                    <div className={Style.android}>
                        
                        <p>请到主页查看：<a href="https://koi.ll8s.com/index.php/archives/217/">请到主页查看：</a></p>
                        <br />
                        
                    </div>
                </div>
                
            </div>
        </Dialog>
    );
}

export default Download;
