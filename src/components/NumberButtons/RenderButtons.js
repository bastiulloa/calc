import React from 'react';
import ClearButton from './ClearButton';
import Number from './Number';
import RenderScreen from '../Screen/RenderScreen';


function RenderButtons(props) {


    return(
        <div className="number-buttons-area">
          <Number num="1" onClick={() => {props.setValue(1)}} />
          <Number num="2" onClick={() => {props.setValue(2)}}/>
          <Number num="3" onClick={() => {props.setValue(3)}}/>
          <Number num="4" onClick={() => {props.setValue(4)}}/>
          <Number num="5" onClick={() => {props.setValue(5)}}/>
          <Number num="6" onClick={() => {props.setValue(6)}}/>
          <Number num="7" onClick={() => {props.setValue(7)}}/>
          <Number num="8" onClick={() => {props.setValue(8)}}/>
          <Number num="9" onClick={() => {props.setValue(9)}}/>
          <Number num="0" onClick={() => {props.setValue(0)}}/>
          <ClearButton butt="CE" />
        </div>
    )
}

export default RenderButtons;