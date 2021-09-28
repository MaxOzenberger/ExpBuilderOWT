/** @jsx jsx */
import { jsx, css, classNames } from 'jimu-core'
import { Alert } from 'jimu-ui'
import { TemplateType } from '../../../config'
import { PlaceholderComponent } from './component'

export interface PlaceholderProps {
  className?: string
  templateType: TemplateType
  showMessage: boolean
  messageType?: 'basic' | 'tooltip'
  message: string
}

const style = css`
  display: flex;
  justify-content: center;
  .alert-tooltip-button{
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .alert-panel {
    position: absolute;
    max-width: calc(100% - 20px);
    width: auto !important;
    bottom: 10px;
  }
`

export const Placeholder = (props: PlaceholderProps) => {
  const {
    templateType,
    showMessage,
    message,
    messageType = 'tooltip',
    className
  } = props

  return <div className={classNames('placeholder-container w-100 h-100', className)} css={style}>
    <PlaceholderComponent iconSize='large' templateType={templateType} />
    {showMessage && <Alert form={messageType} withIcon={true} size='small' type='warning' text={message}></Alert>}
  </div>
}
export * from './utils'