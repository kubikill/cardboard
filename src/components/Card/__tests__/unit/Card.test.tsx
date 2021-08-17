import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Card } from '../../Card'
import { createCard } from '../../../../data/card/factory'

describe('Card component unit tests', () => {
  const cardProps = createCard({
    content: 'Some card content',
    id: 1,
    createdAt: new Date().toISOString(),
  })

  it('should render card correctly', () => {
    render(<Card {...cardProps} />)
    expect(screen.getByText(cardProps.content)).toBeInTheDocument()
  })

  it('should turn on card editing mode when clicking on content', () => {
    render(<Card {...cardProps} />)

    const content = screen.getByText(cardProps.content)

    userEvent.click(content)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should turn off card editing mode on textarea blur', () => {
    render(<Card {...cardProps} />)

    const content = screen.getByText(cardProps.content)

    userEvent.click(content)

    const textarea = screen.getByRole('textbox')

    textarea.blur()

    expect(textarea).not.toBeInTheDocument()
  })

  it('should set value on textarea change event', () => {
    const initialCardProps = createCard({
      content: '',
      id: 2,
      createdAt: '',
    })

    render(<Card {...initialCardProps} />)

    const content = screen.getByText('Click to start noting')

    userEvent.click(content)
    const textarea = screen.getByRole('textbox')

    const newContent = 'New content'
    userEvent.type(textarea, newContent)

    screen.getByText(newContent)
  })
})
