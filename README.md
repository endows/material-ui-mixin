## Introduction

This package is base on [izzilab:material-ui](https://atmospherejs.com/izzilab/material-ui)
It made to simple your material-life.

## Install

`meteor add endotakashi:material-ui-mixin`

## Using
You can use `Material-UI`,just add one line.
```
var App = React.createClass({
    mixin:[MaterialUIMixin],
    render: function() {
        return (
            <div>
                <DatePicker hintText="Landscape Dialog" mode="landscape"/>
                <TextField hintText="Hint Text" />
            </div>
        );
    }
});
```

## demo
![代替テキスト](Dirty.png)
- 2015-08-23 : Fixed bugs Menu, MenuItem, MenuDivider And Supported SSR.
- 2015-08-11 : upgrade MUI to 0.10.4 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0104)
- 2015-08-02 : upgrade MUI to 0.10.2 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0102)

*Note: This is an old demo with bugs and performance problems. The code is also not updated to use the official react package yet. A new version will follow soon.*
