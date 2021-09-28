/** @jsx jsx */
import { jsx, React, lodash } from 'jimu-core'
import { Button } from 'jimu-ui'
import { renderViewBlockComponentChildren, ViewBlockComponentProps, ViewBlockScenarioType } from '../common/utils'

export const getRuntimeViewBlockScenarios = <T,>(normalizedProps: ViewBlockComponentProps<T>): Array<ViewBlockScenarioType<T>> => {
  const { currentViewBlock } = normalizedProps
  const currentViewBlockData = (currentViewBlock.getViewBlockData || (() => ({})))(normalizedProps)
  const viewBlockKeyForCssName = lodash.kebabCase(currentViewBlock.viewBlockKey ?? `${Math.random()}`.slice(2))
  const viewBlockTypeForCssName = lodash.kebabCase(currentViewBlock.viewBlockType ?? '')
  const generalClassName = `runtime-query__${viewBlockKeyForCssName} runtime-query__${viewBlockTypeForCssName}`
  return [{
    testScenario: () => currentViewBlock.viewBlockType === 'RuntimeBlockTypeQueryBoard',
    renderScenario: () => {
      const {
        getAdditionalClassName = () => '',
        css
      } = currentViewBlockData
      return (
        <div className={`${generalClassName} ${getAdditionalClassName() || ''}`} css={css}>
          {renderViewBlockComponentChildren(normalizedProps)}
        </div>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'RuntimeBlockTypeQueryStage',
    renderScenario: () => (
      <div className={`${generalClassName}`}>
        <div className='runtime-ui-unit-form-line__title'>{currentViewBlock.getViewBlockTitle(normalizedProps)}</div>
        {currentViewBlock.renderViewBlock(normalizedProps)}
      </div>
    )
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'RuntimeBlockTypeFormQuestions',
    renderScenario: () => (
      <div className={`${generalClassName}`}>
        {renderViewBlockComponentChildren(normalizedProps)}
      </div>
    )
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'RuntimeBlockTypeFormLine',
    renderScenario: () => (
      <div className={`${generalClassName}`}>
        <div className='runtime-ui-unit-form-line__title'>{currentViewBlock.getViewBlockTitle(normalizedProps)}</div>
        {currentViewBlock.renderViewBlock(normalizedProps)}
      </div>
    )
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'RuntimeBlockTypeFormActions',
    renderScenario: () => {
      const {
        commandItems = []
      } = currentViewBlockData
      return (
        <div className={`${generalClassName}`}>
          <div className='ui-unit-form-action-bar'>
            {
              commandItems.map((commandItem, x) => {
                const { buttonClass, separator = '', ...supportedProps } = commandItem.getButtonProps?.() ?? {}
                const renderSeparator = () => <div className='ui-unit-separator'>&nbsp;</div>
                return (
                  <React.Fragment key={x}>
                    {separator === 'left' && renderSeparator()}
                    <Button className={`ui-unit-button ${buttonClass ?? ''}`} {...supportedProps} />
                    {separator === 'right' && renderSeparator()}
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'RuntimeBlockTypeFormResult',
    renderScenario: () => (
      <div className={`${generalClassName}`}>
        {currentViewBlock.renderViewBlock(normalizedProps)}
      </div>
    )
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'RuntimeBlockTypeCustom',
    renderScenario: () => (
      currentViewBlock.renderViewBlock(normalizedProps)
    )
  }]
}
