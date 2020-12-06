import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import styleGame from './BaiTapXucXac.module.css'
export default class BaiTapXucXacRedux extends Component {
    render() {
        return (
            <div className={`${styleGame['bgGame']}`}>
                <h1 className="display-4 mt-5 text-center">Bài tập game xúc xắc</h1>
                <div>
                    <XucXac />
                    <KetQua />
                </div>
            </div>
        )
    }
}
