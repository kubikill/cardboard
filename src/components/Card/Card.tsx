import { useRef, useState } from 'react'

import { CardContentForm } from './card-elements/CardContentForm'

import { CardEntity } from '../../data/card'
import { useOutsideClick } from '../../hooks/useOutsideClick'

import styles from './Card.module.css'

interface CardProps extends CardEntity {}

export const Card = (props: CardProps) => {
  const ref = useRef(null)
  const [isEditing, setEditing] = useState(false)

  const handleSetEditingOff = () => {
    setEditing(false)
  }

  useOutsideClick(ref, handleSetEditingOff)

  const handleSetEditingOn = () => {
    setEditing(true)
  }

  const handleSaveContent = () => {
    handleSetEditingOff()
  }

  return (
    <div data-cy={`card-${props.id}`} className={styles.card}>
      <p className={styles.date}>{props?.createdAt || 'Date'}</p>
      {!isEditing ? (
        <p onClick={handleSetEditingOn}>
          {props?.content || 'Click to start noting'}
        </p>
      ) : (
        <CardContentForm onSubmit={handleSaveContent} initialValues={props} />
      )}
    </div>
  )
}
