import React from 'react'

import { render, waitFor, screen } from '@testing-library/react'

import Board from '../../Board.container'

import { findCards } from '../../../../data/card'
import { createManyCards } from '../../../../data/card/factory'

jest.mock('../../../../data/card/api')

const mockedGetCardsRequest = findCards as unknown as jest.Mock

describe('Board integration tests', () => {
  it('should display 4 fetched cards on board correctly', async () => {
    const cardContent = 'Default message'

    mockedGetCardsRequest.mockResolvedValue(
      createManyCards(4, { content: cardContent })
    )

    render(<Board />)

    await waitFor(() => {
      expect(mockedGetCardsRequest).toHaveBeenCalled()
      expect(screen.getAllByText(cardContent)).toHaveLength(4)
    })
  })
})
