import React, { Component, Fragment } from 'react';
import HeaderComponent from './Components/HeaderComponent/Header';
import youtubeapi, { baseParams } from "./Api/YoutubeApi";
import VideoList from './Components/VideoComponents/VideoList';
import VideoDetails from './Components/VideoComponents/VideoDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
      selectedVideo: null,  //one selected video out of 10 videos
    };
  }


  componentDidMount() {
    this.FormSubmit("javascript");
  }

  FormSubmit = async (term) => {
    let response = await youtubeapi.get("/search", {
      params: {
        q: term,
        ...baseParams,
      },
    });
    //console.log(response.data.items);
    this.setState({ videos: response.data.items, loading: true ,selectedVideo: response.data.items[0],});
  };

  onSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() { 
    return (
      <Fragment>
        <header>
          <HeaderComponent FromAppFormSubmit={this.FormSubmit} />
        </header>
        <main className="container-fluid my-4 pl-4 pr-4">
          <section id="data-list">
            <article>
              <div className="player_Block">
                <VideoDetails
                  video={this.state.selectedVideo}
                  loading={this.state.loading}
                />
              </div>
              <div className="list_Block">
                <VideoList
                  videos={this.state.videos}
                  onSelectedVideo={this.onSelectedVideo}
                />
              </div>
            </article>
          </section>
        </main>
      </Fragment>
    );
  }
}
 
export default App;