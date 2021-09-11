import { CardEditEntity } from '../../../data/card'

import { useInput } from '../../../hooks/useInput'
import { useEffect, useState } from 'react'

import styles from './CardContentForm.module.css'

interface CardContentFormValues extends CardEditEntity {}

interface CardContentFormProps {
  initialValues: CardContentFormValues
  onSubmit(values: CardContentFormValues): void
}

const DEFAULT_FONT_SIZE = 16;

export const CardContentForm = (props: CardContentFormProps) => {
  const { value, handleChange } = useInput(props.initialValues.content)
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    props.onSubmit({ ...props.initialValues, content: value })
  }

  useEffect(() => {
    setFontSize(DEFAULT_FONT_SIZE - Math.floor(value.length / 30));
  }, [setFontSize, value]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        autoFocus
        style={{fontSize: `${fontSize}px`}}
        value={value}
        onBlur={handleSubmit}
        onChange={handleChange}
      />
    </form>
  )
}
