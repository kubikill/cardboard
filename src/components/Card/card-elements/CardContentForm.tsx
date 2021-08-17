import { CardEditEntity } from '../../../data/card'

import { useInput } from '../../../hooks/useInput'

import styles from './CardContentForm.module.css'

interface CardContentFormValues extends CardEditEntity {}

interface CardContentFormProps {
  initialValues: CardContentFormValues
  onSubmit(values: CardContentFormValues): void
}

export const CardContentForm = (props: CardContentFormProps) => {
  const { value, handleChange } = useInput(props.initialValues.content)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    props.onSubmit({ ...props.initialValues, content: value })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        autoFocus
        value={value}
        onBlur={handleSubmit}
        onChange={handleChange}
      />
    </form>
  )
}
