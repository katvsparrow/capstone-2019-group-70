import React from 'react';
import ReactImageZoom from 'react-image-zoom';
 
const WillView = (props) => {
    props = {width: 400, height: 500, zoomWidth: 500, img: require("assets/img/lorem_text.png")};

    return(
        <>
            <ReactImageZoom {...props} />
        </>
    );

}

export default WillView;