import React from 'react';

const CardImg = (props) => {
    const getImage = require.context('../images', true);

    let pic = getImage(`./${props.info.image}.png`).default;
    
    return (
        <div className='dragonBalls'>
            <button id={props.info.id} onClick={() => props.clicked(props.info.id)}>
                <img src={pic}alt='dragon ball'></img>
                {props.info.ball}
            </button>
        </div>
        // <div className='dragonBalls'>
        //     <button id={props.info.id} 
        //         onClick={()=> props.clicked(props.info.id)}>
        //         <img src={pic}><img></img>
        //         {props.info.ball}
        //     </button>
        // </div>
    )

}

export default CardImg