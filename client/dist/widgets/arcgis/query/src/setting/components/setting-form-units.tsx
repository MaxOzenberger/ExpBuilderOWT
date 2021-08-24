/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { executeScenario } from '../../common/utils'

export const SettingField = (props) => {
  const { className, data = {}, fieldStyle: { fieldTag: FieldTag = SettingRow, rowMode = 'OneRow' } = {}, children } = props
  const currentClassName = `${className} setting-query__setting-field setting-query__setting-field-row-mode-${rowMode}`
  const label = data.currentViewBlock?.getViewBlockTitle?.(data)
  const scenarios = [{
    testScenario: () => rowMode === 'NoRow',
    renderScenario: () => (<React.Fragment>{children}</React.Fragment>)
  }, {
    testScenario: () => rowMode === 'OneRow',
    renderScenario: () => (
      FieldTag === SettingRow ? (
        <SettingRow className={`${currentClassName}`} label={label} flow='no-wrap'>
          {children}
        </SettingRow>
      ) : null
    )
  }, {
    testScenario: () => true,
    renderScenario: () => (
      <React.Fragment>
        <SettingRow className={`${currentClassName} setting-query__setting-field-row0 ${label ? '' : 'collapse'}`} label={label} flow='wrap' />
        {
          ((renderChild) => (rowMode === 'TwoRow' ? renderChild(children, 0) : React.Children.map(children, renderChild)))((child, x) => {
            const content = child && <SettingRow className={`${currentClassName} setting-query__setting-field-row${x + 1}`} flow='wrap'>{child}</SettingRow>
            return content
          })
        }
      </React.Fragment>
    )
  }]
  return executeScenario(scenarios, { action: 'renderScenario' })
}
