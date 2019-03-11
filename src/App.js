import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Videolist from './components/Videolist';
import VideoDetails from './components/VideoDetails';
//import BarraBuscador from './components/barraBuscador';
const API_KEY = 'AIzaSyAQY2c6aiwj-KpeWdpxpi_lWu0Dy1iei0A';

class App extends Component {
  //Constructor y super obligados para trabajar con props
  constructor(props){
    super(props);
//Estado para la selección de video
    this.state = { 
        videos: [],
        videoSeleccionado: null
    };

  } 
//term = termino o cosa a buscar
  videoSearch(busqueda) {
//busqueda = parametro definido en VideoSearch, key=api de desarrollador, data= guarda los valores de la busqueda
    YTSearch({key: API_KEY, term: busqueda}, (data) => {
      //console.log(data);
        this.setState({ 
          //Cambia el estado de videos y le inserta los resultados de la busqueda
            videos: data,
            //video seleccionado de la lista con el indice para mostrarlo
            videoSeleccionado: data[0]
        });
    });
  
  }

  componentDidMount(busqueda){
    this.videoSearch('LP');
  }
    render() { 
      return (
        <div>
          <VideoDetails seleccion={this.state.videoSeleccionado}/>
          <Videolist 
            onSelect={seleccionado => this.setState({videoSeleccionado: seleccionado})}
            videos={this.state.videos} />
        </div>
      );
    }
  }
export default App;
