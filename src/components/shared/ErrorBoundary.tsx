import { ApiError, ClientError } from '@/errors'
import { ErrorInfo, useEffect, useState } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { error as mError } from '@models/error'
import { useAlertContext } from '@/contexts/AlertContext'

interface Props {
  children: React.ReactNode
  fallbackComponent?: React.ReactNode
}

interface D2ErrorBoundaryValue {
  isError: boolean
  message: string
}

const defaultValue: D2ErrorBoundaryValue = {
  isError: false,
  message: '',
}

function D2ErrorBoundary({ children, fallbackComponent }: Props) {
  const [value, setValue] = useState<D2ErrorBoundaryValue>(defaultValue)
  const { open } = useAlertContext()

  const handleOnError = (error: Error, errorInfo: ErrorInfo) => {
    if (error instanceof ClientError || error instanceof ApiError) {
      console.error(error.log, errorInfo)
      setValue({
        isError: true,
        message: error.msg,
      })
    } else {
      console.error(error, errorInfo)
      setValue({
        isError: true,
        message: `${mError.global.unknown.message} [${mError.global.unknown.code}]`,
      })
    }
  }

  if (fallbackComponent == null && value.isError && value.message !== '') {
    open({
      title: value.message,
      buttonLabel: '확인',
      onButtonClick: () => {
        setValue(defaultValue)
      },
    })
  }

  return (
    <ErrorBoundary
      FallbackComponent={() => fallbackComponent}
      onError={(error, errorInfo) => handleOnError(error, errorInfo)}
    >
      {children}
    </ErrorBoundary>
  )
}

export default D2ErrorBoundary
