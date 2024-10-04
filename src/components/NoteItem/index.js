import {EachNotesItem, EachItemTitle} from './styledComponents'

const NoteItem = props => {
  const {note} = props
  const {title, notes} = note
  return (
    <EachNotesItem>
      <EachItemTitle>{title}</EachItemTitle>
      <p>{notes}</p>
    </EachNotesItem>
  )
}

export default NoteItem
