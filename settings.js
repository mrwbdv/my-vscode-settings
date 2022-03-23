{
  // window settings
  "window.titleBarStyle": "custom",

  // font settings
  "editor.fontFamily": "'Ubuntu Mono', monospace",
  "editor.fontSize": 15,
  "editor.lineHeight": 23,

  "workbench.colorTheme": "Horizon",
  "workbench.colorCustomizations": {
    "titleBar.activeBackground": "#0a0a0e",
    "titleBar.inactiveBackground": "#0a0a0e",

    "editor.background": "#1b1e27",

    "activityBar.background": "#0a0a0e",
    "activityBar.border": "#0a0a0e",

    "sideBar.background": "#161920",
    "sideBar.border": "#161920",
    "sideBarSectionHeader.background": "#111116",

    "statusBar.background": "#0a0a0e",
    "statusBar.border": "#0a0a0e",

    "editorGroupHeader.tabsBackground": "#161920",
    "editorGroupHeader.tabsBorder": "#161920",

    "tab.activeBackground": "#0a0a0e",
    "tab.inactiveBackground": "#161920",

    "panel.background": "#161920",
    "panel.border": "#0a0a0e"
  },

  // Hide unnecessary stuff
  "editor.minimap.enabled": false,
  "explorer.openEditors.visible": 0,

  // move and delete files without confirmation
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,

  /*
   * Settings below is optional and depend on your preferences
   */
  "editor.tabSize": 2,

  // icons
  "workbench.iconTheme": "vscode-icons",
  "vsicons.presets.hideExplorerArrows": true,

  // flow tweaks
  "javascript.validate.enable": false,

  "workbench.panel.defaultLocation": "right",

  // auto update imports
  "javascript.updateImportsOnFileMove.enabled": "always",

  // prettier
  "prettier.eslintIntegration": true,
  "prettier.tslintIntegration": true,

  "files.autoSave": "onFocusChange",

  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "git.autofetch": true,
  "editor.wordWrap": "on",
  "prettier.tabWidth": 2,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.semi": true,
  "prettier.jsxBracketSameLine": true,
  "prettier.printWidth": 100,
  "emmet.triggerExpansionOnTab": true,
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.sideBar.location": "right",

  "typescript.updateImportsOnFileMove.enabled": "always",
  "bracketPairColorizer.depreciation-notice": false,
  "editor.inlineSuggest.enabled": true,
  "editor.formatOnSave": true,
  "vsicons.dontShowNewVersionMessage": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "terminal.integrated.tabs.location": "left"
  // "eslint.validate": ["javascript"]
}
