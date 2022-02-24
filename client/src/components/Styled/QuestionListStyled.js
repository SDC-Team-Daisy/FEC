import styled from 'styled-components';

export const QuestionSummary = styled.div`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 17px;
  overflow: auto;
`

export const QuestionWrapper = styled.div`
  border-style: solid;
  width: 85%;
  height: 225px;
  align: center;
  padding: 10px;
  padding-left: 5%;
  padding-right: 5%;
  margin: 30px 0 0 10px;
  background-color: rgba(255, 255, 255, 0.736);
  border-radius: 8px;
  border-color: #b3b3b3;
  overflow-y:auto;
`

export const QuestionSectionWrapper = styled.div`
  width: 95%;
  height: 450px;
  align: center;
  padding: 10px;
  overflow-y:auto;
`

export const QuestionBody = styled.div`
  padding: 10px;
  margin: 10px;
  text-align: center;
  font-family: Georgia;
  overflow: auto;
`

export const QuestionDate = styled.div`
  text-align: right;
  font-family: Georgia;
  font-style: italic;
  padding: 2px;
  font-size: 15px;
  color: #66cc99;
`

export const QuestionAsker = styled.div`
  text-align: right;
  font-family: Georgia;
  color: #ff8243;
  padding: 3px;
  font-size: 15px;
`

export const Left = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const NoQuestion = styled.div`
  text-align: center;
  font-family: Georgia;
`

