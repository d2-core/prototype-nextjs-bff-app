import { Api } from '@/models/api'

export default class ApiError extends Error {
  msg: string
  log: string
  body?: any

  constructor(api: Api<any>) {
    super()
    const { result, body } = api
    this.msg = result.message ?? ''
    this.log = `Code: ${result.code}, ${result.reason}`
    this.body = body
  }
}
