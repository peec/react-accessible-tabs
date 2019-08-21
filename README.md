# WAI-Aria tabs

Accessible tab component for react.

- Keyboard navigation (left right arrow for selecting focus on tab header)
- Aria attributes


## Example usage

```jsx harmony
<Tabs initialActiveTab="tab2">
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

```css

.tabs {
}
.tabs-header {
  display: flex;
}
.tab {
  display: block;
  cursor: pointer;
  padding: 16px 24px;
}
.tab.active {
  border-bottom: 2px solid orangered;
}
.tab-panel {
  padding: 10px;
  display: none;
}
.tab-panel.active {
  display: block;
}

```
