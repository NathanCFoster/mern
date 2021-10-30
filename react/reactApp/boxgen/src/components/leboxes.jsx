import React from 'react';


const LeBoxes = (props) => {
    const newStyle = (e) => {
        return {
            backgroundColor: e
        };
    }
    return(
        <div className="container d-flex flex-wrap flex-row">
            { props.allColors.map( (item, i) => 
                <div className="box" style={newStyle(item)} key={i}></div>
            )}
        </div>
    );
}

export default LeBoxes;