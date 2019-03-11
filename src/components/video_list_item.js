import React, {Component} from 'react'; 

class VideoListItem extends Component {
    constructor(props){
        super(props);
        this.state = { 
            toggle: false, 
            value: ' '
        };
        this.handleSelect = this.handleSelect.bind(this);
      }
      componentDidMount(){
		this.setState({
			value: this.props.indice
        }) 
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.indice !== prevProps.indice) {
            this.setState({
               value: this.props.indice
            })
            
        }
      }
    
    handleSelect(){
        this.props.userSelected(this.props.video)
        this.props.comparacion(this.state.value)
    }
      
    render(){
    const video = this.props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
   
    if(this.props.vista === false){
        return (
            <li style={this.props.style} onClick={this.handleSelect} className="list-group-item">
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
            <li style={this.props.style}  onClick={this.handleSelect} className="list-group-item">
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