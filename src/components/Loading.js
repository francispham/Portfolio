import styled from 'styled-components'
import { HourGlass } from 'react-awesome-spinners'
import React from 'react'

const StyledLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  div {
    :after {
      width: 20rem;
      height: 20rem;
    }
  }
`
export const Loading = () => (
  <StyledLoading>
    <HourGlass color="#C39F6D" size="20" sizeUnit="rem" />
  </StyledLoading>
)
