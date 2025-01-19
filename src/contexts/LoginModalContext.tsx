import LoginModal from '@/components/shared/LoginModal'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

interface LoginModalContextValue {
  open: () => void
}

const defaultValue: LoginModalContextValue = {
  open: () => {},
}

const Context = createContext<LoginModalContextValue>(defaultValue)

export function LoginModalContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const $portal_root =
    typeof window === 'undefined'
      ? null
      : document.getElementById('root-portal')

  const open = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const value: LoginModalContextValue = useMemo(
    () => ({
      open: open,
    }),
    [open, close],
  )

  return (
    <Context.Provider value={value}>
      {children}
      {isOpen && $portal_root != null
        ? (createPortal(
            <LoginModal open={isOpen} onClose={close} />,
            $portal_root,
          ) as ReactNode)
        : null}
    </Context.Provider>
  )
}

export function useLoginModalContext() {
  const context = useContext(Context)
  if (!context) {
    throw new Error('AlertContext 내부에서 사용해주세요')
  }
  return context
}
