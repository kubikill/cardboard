import { CardDto } from './dto'

import { get } from '../../api/requests'

const BASE_PATH = '/cards'

export const findCards = async (): Promise<CardDto[]> =>
  get<CardDto[]>(BASE_PATH)
