import React, {Component} from 'react';
import VideoListItem from './video_list_item';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Videolist extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false, 
            value:0
        };
        this.toggleButton = this.toggleButton.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    toggleButton() {
        this.setState(prevState => ({ toggle: !prevState.toggle }));
        
    }

    handleSelect(value){
        this.setState({
            value: value   
		});
    }
      
    render(){
        const toggle = this.state.toggle;
        const style = {
            background: '#FDC830',
          };
        const videoItems = this.props.videos.map((video,index) => {
        if(this.state.value === index){
            return (
                <div key={index}>
                    <VideoListItem 
                        comparacion={this.handleSelect}
                        userSelected={this.props.onSelect}           
                        video={video}
                        vista={this.state.toggle}
                        indice={index}
                        style={style} 
                         />
                </div>
        );
        }else{
            return (
                    <VideoListItem
                        comparacion={this.handleSelect} 
                        userSelected={this.props.onSelect}           
                        key={video.etag} 
                        video={video}
                        vista={this.state.toggle}
                        indice={index} 
                        />
            );
        }
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