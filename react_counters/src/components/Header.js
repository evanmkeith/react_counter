import React from 'react';

function Header (props){
        return (
        <header className="App-header">
            <h1 className="App-title">React Counters</h1>
            <button onClick={props.addCounters}>+</button>  
            <button onClick={props.minusCounters}>-</button>
        </header>
    );
}

export default Header;