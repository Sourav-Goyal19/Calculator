import React, { useEffect, useRef, useState } from 'react'
import '../style/App.css';
import '../style/Header.css';

export const Header = ({ expression, result, history }) => {
    const headerHistoryRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the header_history element
    headerHistoryRef.current.scrollTop = headerHistoryRef.current.scrollHeight;
  }, [history]);
    return (
        <div className='header'>
            <div ref={headerHistoryRef} className="header_history custom-scroll">
                {history.map((item, index) => {
                    return (
                        <p style={{textAlign:'end'}} key={index} className="header_history_item">{item}</p>
                    )
                })}
            </div>
            <div className="header_expression custom-scroll">{expression}</div>
            <div className="header_result custom-scroll">{result}</div>
        </div>
    )
}
