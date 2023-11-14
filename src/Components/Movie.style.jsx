import styled from 'styled-components';
export const MovieDetailContainer =styled.div`
  color: black;


`;
export const MoviesContainer = styled.div`
  display: flex;
  background-color: #22254b;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieContainer = styled.div`
  width: 150px;
  margin: 20px;
  background-color: #34345a;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  
`;
export const OverviewContainer = styled.div`
  position: absolute;
  margin: 5px;
  font-size: 10px;
  display: none;
  background-color: rgba(0,0,0,0.3);
  
  ${MovieContainer}:hover & {
    color: white;
    display: block;
  }
`;
export const MovieImg = styled.img`
  max-width: 100%;
`;
export const MovieInfo = styled.div`
  font-size: 10px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;
export const MovieTitle = styled.h4`
  margin: 0;
`;
export const MovieVote = styled.span`
  margin-left: 5px;
`;