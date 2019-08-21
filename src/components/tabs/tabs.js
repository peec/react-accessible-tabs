import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'

const TabContext = React.createContext()
const TabNavigationContext = React.createContext()

const KEY_LEFT_ARROW = 37
const KEY_RIGHT_ARROW = 39

export const Tab = React.forwardRef(({ id, children, className, ...rest }, ref) => {
  const tabContext = useContext(TabContext)
  const tabNavigationContext = useContext(TabNavigationContext)
  const handleChangeTab = e => {
    e.preventDefault()
    tabContext.changeTab(id)
  }
  const isActive = tabContext.activeTab === id
  const classNamePrefix = className || 'tab'
  const classNames = `${classNamePrefix} ${isActive ? 'active' : ''}`
  const tabId = `label-for-${id}`
  const tabIndex = !isActive ? '-1' : null

  const onKeyDown = (event) => {
    const key = event.keyCode
    switch (key) {
      case KEY_LEFT_ARROW:
        tabNavigationContext.prevFocus(ref)
        break;
      case KEY_RIGHT_ARROW:
        tabNavigationContext.nextFocus(ref)
        break;
      default:
    }
  }

  return (
    <button
      onKeyDown={onKeyDown}
      ref={ref}
      role="tab"
      id={tabId}
      aria-selected={isActive ? 'true' : 'false'}
      aria-controls={id}
      tabIndex={tabIndex} className={classNames} onClick={handleChangeTab} {...rest}>
      {children}
    </button>
  )
})

Tab.propTypes = {
  id: PropTypes.string.isRequired,
}


export const TabPanel = ({ id, children, className, ...rest }) => {
  const tabContext = useContext(TabContext)
  const isActive = tabContext.activeTab === id
  const classNamePrefix = className || 'tab-panel';
  const classNames = `${classNamePrefix} ${isActive ? 'active' : ''}`
  return (
    <div role="tabpanel" tabIndex="0" id={id} aria-hidden={!isActive} aria-labelledby={`label-for-${id}`} className={classNames} {...rest}>
      {children}
    </div>
  )
}
export const Tabs = ({ children, initialActiveTab, className, ...rest }) => {
  const [ activeTab, changeTab ] = useState(initialActiveTab)
  const classNamePrefix = className || 'tabs';
  return (
    <TabContext.Provider value={{activeTab, changeTab}}>
      <div className={classNamePrefix} {...rest}>
        {children}
      </div>
    </TabContext.Provider>
  )
}
const TabsHeader = ({ children, label, className, ...rest }) => {
  const tabRefs = children.map(child => React.createRef())
  const classNamePrefix = className || 'tabs-header';
  const nextFocus = (ref) => {
    const currentTabIndex = tabRefs.findIndex(ref => ref.current === document.activeElement)
    let newTabIndex = currentTabIndex + 1
    if (newTabIndex > tabRefs.length - 1) {
      newTabIndex = 0
    }
    tabRefs[newTabIndex].current.focus()
  }
  const prevFocus = () => {
    const currentTabIndex = tabRefs.findIndex(ref => ref.current === document.activeElement)
    let newTabIndex = currentTabIndex - 1
    if (newTabIndex < 0) {
      newTabIndex = tabRefs.length - 1
    }
    tabRefs[newTabIndex].current.focus()
  }

  const tabChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ref: tabRefs[index]
    })
  });
  return (
    <TabNavigationContext.Provider value={{nextFocus, prevFocus}}>
      <div className={classNamePrefix} role="tablist" aria-label={label} {...rest}>
        {tabChildren}
      </div>
    </TabNavigationContext.Provider>
  )
}
Tabs.Header = TabsHeader
