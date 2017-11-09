import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BookmarkList, ReplayArrowButton, ReplayPageDisplay } from 'components/controls';

import './style.scss';


class ReplayURLBar extends Component {
  static contextTypes = {
    canAdmin: PropTypes.bool,
    currMode: PropTypes.string
  };

  static propTypes = {
    bookmarks: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.object,
    recordingIndex: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = { showList: false };
  }

  render() {
    const { bookmarks, recordingIndex, params } = this.props;

    return (
      <div className="main-bar">
        <form className="form-group-recorder-url">
          <div className="input-group containerized">
            <div className="input-group-btn rb-dropdown">
              <ReplayArrowButton
                page={recordingIndex - 1 >= 0 ? bookmarks.get(recordingIndex - 1) : null}
                params={params}
                direction="left" />
              <ReplayPageDisplay
                index={recordingIndex}
                total={bookmarks.size} />
            </div>

            <BookmarkList {...this.props} />

            <div className="input-group-btn hidden-xs">
              <ReplayArrowButton
                page={recordingIndex + 1 < bookmarks.size ? bookmarks.get(recordingIndex + 1) : null}
                params={params}
                direction="right" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ReplayURLBar;
