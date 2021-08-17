import { useCallback, useEffect, useState } from 'react'

import { Board } from './Board'
import { Card } from '../Card/Card'

import { CardEntity, findCards } from '../../data/card'

const BoardContainer = () => {
  const [cards, setCards] = useState<CardEntity[]>([])

  const fetchCards = useCallback(async () => {
    try {
      const cards = await findCards()
      setCards(cards)
    } catch (error) {
      alert('Ensure server is running. For more details, check project readme.')
      setCards([])
    }
  }, [])

  useEffect(() => {
    fetchCards()
  }, [fetchCards])

  return (
    <Board>
      {cards.map((cardProps) => (
        <Card
          key={cardProps.id}
          id={cardProps.id}
          content={cardProps.content}
          createdAt={cardProps.createdAt}
        />
      ))}
    </Board>
  )
}

export default BoardContainer
