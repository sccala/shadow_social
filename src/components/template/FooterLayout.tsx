import { VFC, memo, ReactNode } from 'react'
import { Footer } from '../organisms/layout/Footer'

type Props = {
  children: ReactNode
}
export const FooterLayout: VFC<Props> = memo(props => {
  
  return (
    <>
      <Footer />
    </>
  )
})
