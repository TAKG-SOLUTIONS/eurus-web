import React, {Component} from 'react';
import ModelViewer from '@metamask/logo'
class MetaMaskLogo extends Component{
    componentDidMount() {
        this.viewer =ModelViewer({
            pxNotRatio:true,
            width: 100,
            height: 100,
            followMouse: true
        });
        this.el.appendChild(this.viewer.container)
    }

    render() {
        return (
            <div
                style={{position:'absolute',top:'12rem',left:'11rem'}}
                ref={el =>(this.el =el)}
            />
        );
    }
}
export default MetaMaskLogo;