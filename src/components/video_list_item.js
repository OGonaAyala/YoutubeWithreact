import React, {Component} from 'react'; 

class VideoListItem extends Component {
    constructor(props){
        super(props);
        this.state = { toggle: false };
   
      } 
    render(){
    const video = this.props.video;    
    const imageUrl = video.snippet.thumbnails.default.url;
   
    if(this.props.vista === false){
        return (
            <li onClick={() => this.props.userSelected(video)} className="list-group-item">
               <div className="video-list media">
    
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }else{
        return (
            <li onClick={() => this.props.userSelected(video)} className="list-group-item">
               <div className="video-list media">
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }
   } 
}


export default VideoListItem;