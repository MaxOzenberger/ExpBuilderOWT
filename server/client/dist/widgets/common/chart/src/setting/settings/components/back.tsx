/** @jsx jsx */
import { css, jsx, IMState, React, ReactRedux, SerializedStyles } from 'jimu-core'
import { Button, Icon, defaultMessages, hooks } from 'jimu-ui'
const back = require('jimu-ui/lib/icons/direction-left.svg')

export interface BackProps {
  className?: string
  onClick: () => void
  text?: string
}

const useStyle = (): SerializedStyles => {
  const theme = ReactRedux.useSelector((state: IMState) => state.theme)
  const dark400 = theme?.colors?.palette.dark[400]

  return React.useMemo(() => {
    return css`
      span {
        color: ${dark400};
      }
    `
  }, [dark400])
}

export const Back = (props: BackProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages)
  const style = useStyle()

  const { className, onClick, text = translate('back') } = props
  return (
    <Button
      css={style}
      className={className}
      icon
      size='sm'
      type='tertiary'
      onClick={onClick}
    >
      <Icon autoFlip size={16} icon={back} />
      <span className='font-body1 ml-2'>{text}</span>
    </Button>
  )
}
