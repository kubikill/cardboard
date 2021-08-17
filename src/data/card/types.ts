export interface CardEntity {
  id: number
  content: string
  createdAt: string
}

export interface CardCreateEntity extends Omit<CardEntity, 'id'> {}

export interface CardEditEntity extends CardEntity {}
