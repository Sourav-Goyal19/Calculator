import React, { useEffect, useRef, useState } from 'react'
import '../style/App.css';
import '../style/Header.css';

export const Header = ({expression,result}) => {
    const historyRef = useRef();
    useEffect(() => {
        historyRef.current.scrollIntoView({behavior:'smooth'});
    },[])
    return (
        <div className='header'>
            <div ref={historyRef} className="header_history custom-scroll">
                <p>10 +45</p>
                <p>10-29</p>
                <p>10-29</p>
                <p>10-29</p>
                <p>10-29</p>
                <p>10-29</p>
                <p>10-29</p>
                <p>10-29</p>
                <p>10-29</p>
                <p>10-29</p>
            </div>
            <div className="header_expression custom-scroll">{expression}</div>
            <div className="header_result custom-scroll">{result}</div>
        </div>
    )
}
