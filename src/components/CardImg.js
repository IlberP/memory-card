import React from 'react';

const CardImg = (props) => {
    const getImage = require.context('../images', true);

    let pic = getImage(`./${props.info.image}.png`).default;
    
    return (
        <div className='dragonBalls'>
            <button id={props.info.id} 
                onClick={()=>props.clicked(props.info.id)}>
                <image src={pic}></image>
                {props.ball}
            </button>
        </div>
    )

}

export default CardImg