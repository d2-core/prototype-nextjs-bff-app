import { Result } from './api'

export const error = {
  global: {
    unknown: {
      code: 'CLIENT-0001',
      reason: 'invalid refresh token',
      message:
        '현재 시스템에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
    } as Result,
  },
  api: {
    invalidRefreshToken: {
      code: 'CLIENT-1001',
      reason: 'invalid refresh token',
      message:
        '현재 시스템에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
    } as Result,
    connectRefused: {
      code: 'CLIENT-1002',
      reason: 'connect refused',
      message:
        '현재 시스템에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
    } as Result,
  },
}
