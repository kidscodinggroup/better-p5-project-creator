# better-p5-project-creator README
已有的 p5.js 项目创建器功能太简单，不能指定创建的 sketch.js 的文件夹和网页的描述。
每次都要新建文件夹把 sketch.js 和 index.html 拖进去很麻烦，所以就写个了插件，可以
指定文件夹的名称，sketch.js 和 index.html 自动添加到文件夹，并且，可以输入网页的
标题，这样，不同的项目就更容易区分了。一般文件夹名称比较简单，描述比较长，所以与
https://github.com/ultamatum/P5-Project-Creator 不同，我分为了两个项目。
Just inspired by https://github.com/ultamatum/P5-Project-Creator and add new features.
You can specify the folader name for your p5.js sketch so it's move convenient for 
creating prototying and testing different sketches.
Also you can specify the header tag of html, making it better for publish.
![p5creator.fig](https://github.com/kidscodinggroup/better-p5-project-creator/raw/master/p5creator.gif)
## Features
* create p5.js project in specified folder
* add header for html
* use two spaces indent for sketch.js
* specify background color for new sketch.js
Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------
## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
