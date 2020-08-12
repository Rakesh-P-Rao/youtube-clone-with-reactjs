import React, { Component, Fragment } from 'react';
import "./Header.styles.css";
import SearchComponent from '../SearchComponent/Search';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
      this.state = {};
    }
    render() { 
      return (
        <Fragment>
          <section id="headerBlock">
            <article>
              <div>
                <div className="logoBlock">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  YouTube
                </div>

                <div className="searchBlock">
                  <SearchComponent
                    FromheaderFormSubmit={this.props.FromAppFormSubmit}
                  />
                </div>

                <section className="menuBlock">
                  <div>
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                  </div>
                  <div>
                    <i class="fa fa-th" aria-hidden="true"></i>
                  </div>
                  <div>
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </div>
                  <div className="loginBlock">
                    <a href="">
                      <i className="user circle icon"></i>SIGNIN
                    </a>
                  </div>
                </section>
              </div>
            </article>
          </section>
        </Fragment>
      );
    }
}
 
export default HeaderComponent;