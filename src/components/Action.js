import React from 'react';

const Action = (props) => (
        <div>
            <button
                className="big-button" 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                Let's eat!
                </button>
        </div>
    );

export default Action;