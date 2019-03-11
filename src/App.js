import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Videolist from './components/Videolist';
import VideoDetails from './components/VideoDetails';
import BarraBuscador from './components/buscador';
const API_KEY = 'AIzaSyAQY2c6aiwj-KpeWdpxpi_lWu0Dy1iei0A';

class App extends Component {
  //Constructor y super obligados para trabajar con props
  constructor(props){
    super(props);
//Estado para la selección de video
    this.state = { 
        videos: [],
        videoSeleccionado: null,
        val: 'Kygo'
    };
        this.handleSearch = this.handleSearch.bind(this);
  } 
//term = termino o cosa a buscar
  videoSearch(val=this.state.val) {
//busqueda = parametro definido en VideoSearch, key=api de desarrollador, data= guarda los valores de la busqueda
    YTSearch({key: API_KEY, term: val}, (data) => {
      //console.log(data);
        this.setState({ 
          //Cambia el estado de videos y le inserta los resultados de la busqueda
            videos: data,
            //video seleccionado de la lista con el indice para mostrarlo
            videoSeleccionado: data[0]
        });
    });
  
  }

  handleSearch(val){
    this.setState({
      val:val
    })
    this.componentDidMount(val);
  }

  componentDidMount(val){
    this.videoSearch(val);
  }
    render() { 
      return (
        <div>
          <BarraBuscador search={this.handleSearch}/>
          <VideoDetails seleccion={this.state.videoSeleccionado}/>
          <Videolist 
            onSelect={seleccionado => this.setState({videoSeleccionado: seleccionado})}
            videos={this.state.videos} />
        </div>
      );
    }
  }
export default App;
