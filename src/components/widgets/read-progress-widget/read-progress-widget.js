import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveProgress } from "../../../actions/books";

import { StyledStat, StyledButton, StyledProgress, StyledInput, StyledDiv } from "./style";

class ReadProgressWidget extends Component {
  state = {
    visibilityProgress: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  saveProgressClick = e => {
    e.preventDefault();
    const { goodreadsId, saveProgress } = this.props;
    const readPages = parseInt(this.state.readPages);
    saveProgress(readPages, goodreadsId)
      .then(() => this.setState({ visibilityProgress: false }));
  };

  render() {
    const { pages, readPages } = this.props;
    const { visibilityProgress } = this.state;
    return visibilityProgress ? (
      <div>
        <StyledDiv>
          <span>Currently on </span>
          <StyledInput
            type="text"
            name="readPages"
            id="readPages"
            defaultValue={readPages ? readPages : 0}
            onChange={this.onChange}
          />
          <span>of {pages}</span>
        </StyledDiv>

        <StyledButton onClick={this.saveProgressClick}>Save</StyledButton>
      </div>
    ) : (
      <div>
        <StyledProgress value={readPages ? readPages : 0} max={pages} />
        <StyledStat>{readPages ? readPages : 0}/{pages}</StyledStat>
        <StyledButton onClick={() => this.setState({ visibilityProgress: true })}>Update progress</StyledButton>
      </div>
    );
  }
}

ReadProgressWidget.propTypes = {
  pages: PropTypes.number.isRequired,
  readPages: PropTypes.number.isRequired,
  goodreadsId: PropTypes.string.isRequired,
  updateErrors: PropTypes.func.isRequired,
  updateReadPages: PropTypes.func.isRequired,
  saveProgress: PropTypes.func.isRequired
};

export default connect(
  null,
  { saveProgress }
)(ReadProgressWidget);
