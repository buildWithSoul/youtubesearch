import React, { Component } from 'react';	
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
const API_KEY = "AIzaSyBeWFfFh0iT9gvArEL84cLn1Q63rkBoCcs";




class App extends Component { 
	constructor(props){
		super(props);

		this.state = { selectedVideo:null,
			videos: [] 
		};

		this.onSearch('surfboards');
	}

	onSearch(term){
		YTSearch({key: API_KEY, term:term}, (vids) => {
			this.setState({ videos: vids});
			this.setState({selectedVideo: vids[0]});
		});
	}

	render(){
		return (
			<div className="row">
				<SearchBar onSearch={term => this.onSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>

		 	</div> 
		);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));