import React, { useEffect, useRef, useState } from 'react'
import '../style/App.css';
import '../style/Header.css';

export const Header = ({expression,result,history}) => {
    const historyRef = useRef();
    useEffect(() => {
        historyRef.current.scrollIntoView({behavior:'smooth'});
    },[])
    return (
        <div className='header'>
            <div ref={historyRef} className="header_history custom-scroll">
                {history.map((item, index) => {
                    return (
                        <p key={index} className="header_history_item">{item}</p>
                    )
                })}
            </div>
            <div className="header_expression custom-scroll">{expression}</div>
            <div className="header_result custom-scroll">{result}</div>
        </div>
    )
}
