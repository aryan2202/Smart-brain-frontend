import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm =({ onInputChange, onButtonDetect }) => {
    return(
    <div>
        <p className='f3 grow'>
            {'This Magic Brain will detect faces in your pictures. Give it a try!'}
        </p>
        <div className='pa3 form br3 shadow-5 w-40 center'>
            <input className='f4 mh3 pa2 w-70 grow center' type='tex' onChange={ onInputChange }/>
            <button 
                className='ma2 mh3 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                type="submit"
                onClick={onButtonDetect}>
                Detect
                </button>
        </div>
    </div>
    )
}

export default ImageLinkForm;