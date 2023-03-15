import React from 'react';
import ReactPlayer from 'react-player/lazy';
function Videos(){
    return(<>
    <div id='upload'> 
    <h2>Upload Videos</h2>
    <div>

    </div>
    <ReactPlayer url='https://www.youtube.com/watch?v=B-xXpnSTc-Y&ab_channel=LakshayChaudhary'/>
    
    <input type="file"/>
    <button>button</button>
    </div>
    
    </>);
}

export default Videos;
