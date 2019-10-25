import React from "react";

import { StyledContainer, StyledSpinner } from "./style";

const CenterLoading = () => {
  return (
    <StyledContainer>
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </StyledSpinner>
    </StyledContainer>
  );
};

export default CenterLoading;
