import { useRef, useState } from 'react'

import { CardContentForm } from './card-elements/CardContentForm'

import { CardEntity } from '../../data/card'
import { useOutsideClick } from '../../hooks/useOutsideClick'

import styles from './Card.module.css'

interface CardProps extends CardEntity {}

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const WEEKDAY_NAMES = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

export const Card = (props: CardProps) => {
  const ref = useRef(null)
  const [isEditing, setEditing] = useState(false)

  const formatDate = (date: string) => {
    if (!date) {
      return "";
    }
    const dateObj = new Date(date);
    let ordinal;
    if ([1, 21, 31].includes(dateObj.getDate())) {
      ordinal = "st";
    } else if ([2, 22].includes(dateObj.getDate())) {
      ordinal = "nd"
    } else if ([3, 23].includes(dateObj.getDate())) {
      ordinal = "rd"
    } else {
      ordinal = "th";
    }
    return `${WEEKDAY_NAMES[dateObj.getDay()]}, ${dateObj.getDate()}${ordinal} ${MONTH_NAMES[dateObj.getMonth()]} ${dateObj.getFullYear().toString().substring(2)}`;
  }

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
      <p className={styles.date}>{formatDate(props?.createdAt) || 'Date'}</p>
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
