# WAI-Aria tabs

Accessible tab component for react.

- Keyboard navigation (left right arrow for selecting focus on tab header)
- Aria attributes


## Install

```bash
npm install --save react-wai-accessible-tabs
```

## Example usage

```jsx harmony
import { Tabs, TabPanel, Tab } from 'react-wai-accessible-tabs';

<Tabs className="my-tabs" initialActiveTab="tab2">
    <Tabs.Header label="Sports">
        <Tab id="tab1">Football</Tab>
        <Tab id="tab2">Basketball</Tab>
        <Tab id="tab3">Baseball</Tab>
    </Tabs.Header>
    <TabPanel id="tab1">
      Football is great.
    </TabPanel>
    <TabPanel id="tab2">
      Basketball is also great.
    </TabPanel>
    <TabPanel id="tab3">
      Baseball is also great.
    </TabPanel>
</Tabs>
```



## Styling

Example styles

```css
.my-tabs .tabs-header {
  display: flex;
}
.my-tabs .tab {
  display: block;
  cursor: pointer;
  padding: 16px 24px;
}
.my-tabs .tab.active {
  border-bottom: 2px solid orangered;
}
.my-tabs .tab-panel {
  padding: 10px;
  display: none;
}
.my-tabs .tab-panel.active {
  display: block;
}

```
