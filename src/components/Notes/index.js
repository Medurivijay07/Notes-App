import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesHeading,
  FormBox,
  TitleInput,
  NoteInput,
  FormContainer,
  AddButton,
  NotesList,
  EmptyNotesViewContainer,
  EmptyNotesImage,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNotes = event => setNotes(event.target.value)

  const onSubmitNotes = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    setNotesList(prevList => [...prevList, newNotes])
    setNotes('')
    setTitle('')
  }

  const renderEmptyNotesView = () => (
    <EmptyNotesViewContainer>
      <EmptyNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <h1>No Notes Yet</h1>
      <p>Notes you add will appear here</p>
    </EmptyNotesViewContainer>
  )

  return (
    <MainContainer>
      <NotesHeading>Notes</NotesHeading>
      <FormBox>
        <FormContainer onSubmit={onSubmitNotes}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <NoteInput
            type="text"
            rows="5"
            cols="25"
            placeholder="Take a Note..."
            value={notes}
            onChange={onChangeNotes}
          />
          <AddButton type="submit">Add</AddButton>
        </FormContainer>
      </FormBox>
      {notesList.length === 0 ? (
        renderEmptyNotesView()
      ) : (
        <NotesList>
          {notesList.map(eachnote => (
            <NoteItem key={eachnote.id} note={eachnote} />
          ))}
        </NotesList>
      )}
    </MainContainer>
  )
}

export default Notes
