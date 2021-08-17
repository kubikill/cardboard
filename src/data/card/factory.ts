import { CardEntity } from './types'
import { generateId } from '../../utils/generators'

export const createCard = (data?: Partial<CardEntity>): CardEntity => {
  return {
    id: generateId(),
    content: data?.content || '',
    createdAt: data?.createdAt || '',
  }
}

export const createManyCards = (amount: number, data?: Partial<CardEntity>) => {
  return [...new Array(amount)].map((_card) => {
    return createCard(data)
  })
}
