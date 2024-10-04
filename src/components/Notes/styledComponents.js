import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 40px;
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  text-align: center;
  font-family: 'Bree Serif'
`
export const FormBox = styled.div`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px #bfbfbf;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
`
export const TitleInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
`
export const NoteInput = styled.textarea`
  width: 90%;
  outline: none;
  border: none;
`
export const AddButton = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 7px;
  margin-top: 10px;
`
export const NotesList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`
export const EmptyNotesViewContainer = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const EmptyNotesImage = styled.img`
  width: 20%;
`