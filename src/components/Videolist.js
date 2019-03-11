import React, {Component} from 'react';
import VideoListItem from './video_list_item';
//import { ListGroup, ListGroupItem } from 'reactstrap';

class Videolist extends Component {
    constructor() {
        super();
        this.state = { toggle: false };
        this.toggleButton = this.toggleButton.bind(this);
    }
    
    toggleButton() {
        this.setState(prevState => ({ toggle: !prevState.toggle }));
    }
      
    render(){
        const toggle = this.state.toggle;
        const videoItems = this.props.videos.map((video,index) => {
        return (
                <VideoListItem 
                    userSelected={this.props.onSelect}           
                    key={video.etag} 
                    video={video}
                    vista={this.state.toggle} />
            );
        });

        return (
            <div>
                <div className="video-list media">
                    <div className="media-left">
                        <button onClick={this.toggleButton}>
                            {toggle ? "Cambiar vista" : "Cambiar vista"}
                        </button>
                    </div>
                </div>
                <ul className="col-md-4 list-group">
                    {videoItems}
                </ul>
            </div>  
        );
    }
}


export default Videolist;