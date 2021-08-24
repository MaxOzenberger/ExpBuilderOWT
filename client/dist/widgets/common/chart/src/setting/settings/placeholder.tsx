/** @jsx jsx */
import { React, css, jsx, IMState, ReactRedux } from 'jimu-core'
import { Icon, hooks } from 'jimu-ui'
const pointerIcon = require('jimu-ui/lib/icons/click-outlined-48.svg')

const useStyle = () => {
  const dark = ReactRedux.useSelector((state: IMState) => state.theme?.colors?.palette?.dark)
  const dark200 = dark?.[200]
  const dark500 = dark?.[500]
  return React.useMemo(() => {
    return css`
      height: calc(100% - 102px);
      .jimu-icon {
        color: ${dark200};
      }
      p {
        color: ${dark500};
      }
    `
  }, [dark200, dark500])
}

export const Placeholder = (): React.ReactElement => {
  const translate = hooks.useTranslate()
  const style = useStyle()
  return (
    <div css={style}
      className='select-data-placeholder d-flex flex-column align-items-center justify-content-center p-3'>
      <div className='d-flex flex-column align-items-center'>
        <Icon size={48} icon={pointerIcon} />
        <p className='mt-3 text-center'>
          {translate('selectDataPlaceholder')}
        </p>
      </div>
    </div>
  )
}
