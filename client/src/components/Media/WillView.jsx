import React from 'react';
import ReactImageZoom from 'react-image-zoom';
 
const WillView = (props) => {
    props = {
        width: 500, 
        height: 650,
        zoomWidth: 600,
        zoomPosition: 'original',
        img: require("assets/img/lorem_text.png")};

    return(
        <>
            <ReactImageZoom {...props} />
        </>
    );

}

export default WillView;