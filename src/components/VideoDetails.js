import React from 'react';
//import YouTube from 'react-youtube';

const VideoDetails = function(props) {
    //video guarda lo que contiene props (info del video seleccionado)
    const video = props.seleccion;
    
    //configuración del reproductor


    //Si en un valor nulo aprecera el mensaje cargando
    if(!video){
        return <div>Cargando...</div>;
    }

    //De los props sacamos el id del video para mostrarlo
    const id = video.id.videoId;
    const url = `https://www.youtube.com/embed/${id}`;
    
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.tittle}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );  
}

export default VideoDetails;
