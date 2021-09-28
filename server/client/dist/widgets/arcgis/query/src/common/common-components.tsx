/** @jsx jsx */
import { React, jsx, css, themeUtils } from 'jimu-core'
import { Icon, Button, Modal, ModalBody, ModalFooter, PanelHeader, IconType, ThemeProps } from 'jimu-ui'

const { useState } = React

export interface NavLineProps {
  children?: React.ReactNode
  className?: string
  templateType?: string
  title: string
  titleElement?: React.ReactNode
  disabled?: boolean
  // icon of the main command
  icon?: IconType
  // fired when the component is clicked
  onClick?: () => void
  // fired when the main command is clicked
  onClickIcon?: () => void
}

/**
 * A line block used for navigation (back, forth, expand, collapse, etc.)
 */
export const NavLine = themeUtils.withTheme((props: NavLineProps & ThemeProps) => {
  const { theme, className, title, titleElement, disabled, icon, onClick, onClickIcon, templateType = 'collapsable', children } = props
  // element array
  const getElements = [
    // render the main command icon
    () => (
      icon &&
        <Button className='ui-unit-nav-line-button' size='sm' type='tertiary' disabled={!!disabled} icon onClick={onClickIcon}>
          <Icon size={16} color={theme.colors.black} icon={icon} />
        </Button>
    ),
    // render title
    () => (
      <span className='ui-unit-nav-line-title text-truncate' title={title}>{titleElement || <span className='text-truncate'>{title}</span>}</span>
    ),
    // render options(e.g. additional command button)
    () => <span className='ui-unit-nav-line-option text-truncate'>{children}</span>
  ]
  // rearrange element order according to templateType
  if (['collapsable', 'enter'].includes(templateType)) getElements.push(getElements.shift())
  return (
    <div className={`${className || ''} ui-unit-nav-line ui-unit-nav-line_type-${templateType} ui-unit-nav-line_disabled-${!!disabled}`} onClick={disabled ? null : onClick}>
      {getElements.map((getElement, x) => <React.Fragment key={x}>{getElement()}</React.Fragment>)}
    </div>
  )
})

/**
 * A simple Functional Component storing some States that are commonly used
 */
export const StateHolder = (props) => {
  const { initState = {}, children } = props
  const defaultStateMap = {
    visible: true,
    refContainer: null
  }
  const useStateMap = {
    visible: useState('visible' in initState ? initState.visible : defaultStateMap.visible),
    refContainer: useState('refContainer' in initState ? initState.refContainer : defaultStateMap.refContainer),
    customData: useState({ ...initState.customData })
  }
  return <React.Fragment>{children(useStateMap)}</React.Fragment>
}

export interface DialogPanelProps {
  panelVisible: boolean
  setPanelVisible: (visible: boolean) => void
  getI18nMessage: (id: string) => any
  isModal?: boolean
  title?: any
  bodyContent?: any
  hasHeader?: boolean
  hasFooter?: boolean
}

/**
 * A dialog popup
 */
export const DialogPanel = themeUtils.withTheme((props: DialogPanelProps & ThemeProps) => {
  const { theme, panelVisible, setPanelVisible, getI18nMessage, isModal = true, title = getI18nMessage('queryMessage'), bodyContent = '', hasHeader = true, hasFooter = true } = props
  const toggle = () => setPanelVisible(false)
  const getContent = () => <React.Fragment>
    {
      hasHeader &&
        <PanelHeader className='py-2' title={title} onClose={toggle} />
    }
    <ModalBody>{bodyContent}</ModalBody>
    {
      hasFooter &&
        <ModalFooter>
          <Button onClick={toggle}>{getI18nMessage('ok')}</Button>
        </ModalFooter>
    }
  </React.Fragment>
  const generalClassName = 'ui-unit-dialog-panel'
  const renderModalContent = () => {
    return (
      <Modal className={`${generalClassName}`} isOpen={panelVisible} toggle={toggle} backdrop='static'>
        {getContent()}
      </Modal>
    )
  }
  const renderNonModalContent = () => {
    const getStyle = () => css`
      &.ui-unit-dialog-panel.modal-dialog {
        margin: 0;
        width: 100%;
        .modal-content {
          background-color: ${theme.colors.palette.light[600]};
          color: ${theme.colors.black};
          font-size: .75rem;
          font-weight: 400;
          border: none;
          .panel-header {
            font-size: .8125rem;
            padding: .625rem;
          }
          .modal-body {
            padding: 0 .625rem .75rem;
            white-space: normal;
          }
        }
      }
    `
    return (
      <div className={`${generalClassName} modal-dialog ${panelVisible ? '' : 'collapse'}`} css={getStyle()}>
        <div className='modal-content'>
          {getContent()}
        </div>
      </div>
    )
  }
  return isModal ? renderModalContent() : renderNonModalContent()
})

export enum EntityStatusType {
  None = '',
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
  Warning = 'warning',
  Error = 'error',
}

export interface StatusIndicatorProps {
  className?: string
  statusType?: EntityStatusType
  title?: string
}

/**
 * An animatable icon representing status
 */
export const StatusIndicator = themeUtils.withTheme((props: StatusIndicatorProps & ThemeProps) => {
  const { theme, className, title, statusType } = props
  const getStyle = () => css`
    &.ui-unit-status-indicator {
      display: flex;
      &.ui-unit-status-indicator_status-type-loading {
        &:before {
          @keyframes loading {
            0% {transform: rotate(0deg); };
            100% {transform: rotate(360deg)};
          }
          content: '';
          width: 1rem;
          height: 1rem;
          display: block;
          border: 1px solid ${theme?.colors?.palette?.light?.[400]};
          border-radius: 50%;
          border-top: 1px solid ${theme?.colors?.palette?.primary?.[600]};
          box-sizing: border-box;
          animation: loading 2s infinite linear;
          margin-right: .25rem;
        }
      }
    }
  `
  return (
    statusType &&
      <div className={`${className ?? ''} ui-unit-status-indicator ui-unit-status-indicator_status-type-${statusType}`} title={title} css={getStyle()} />
  )
})

export interface EntityNoteType {
  renderIcon?: (title: string) => any
  message?: string
  type?: EntityStatusType
}

export interface EntityNoteBlockProps {
  className?: string
  templateType?: 'line' | 'icon'
  entityNote?: EntityNoteType
}

/**
 * An information block presenting entity status (e.g. datasource)
 */
export const EntityNoteBlock = themeUtils.withTheme((props: EntityNoteBlockProps & ThemeProps) => {
  const { className, templateType = 'line', entityNote } = props
  const getStyle = () => css`
    &.ui-unit-entity-status {
      display: flex;
      align-items: center;
      > .jimu-icon {
        flex: none;
        + .ui-unit-entity-status__message {
          margin-left: .25rem;
        }
      }
    }
  `
  return (
    entityNote &&
      <div className={`${className ?? ''} ui-unit-entity-status ui-unit-entity-status_type-${templateType}`} css={getStyle()}>
        {
          templateType &&
            <React.Fragment>{entityNote?.renderIcon(entityNote?.message)}{templateType === 'line' && <div className='ui-unit-entity-status__message'>{entityNote?.message}</div>}</React.Fragment>
        }
      </div>
  )
})
