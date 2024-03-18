### 显示本地推荐插件

你可以通过VSCode的命令面板来显示推荐插件。按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（Mac）打开命令面板，然后输入以下命令：

```shell
Extensions: Show Recommended Extensions
```

这个命令会显示VSCode推荐的插件列表，你可以从中选择安装你感兴趣的插件。

### 新增依赖

`D`：这个参数表示将 `sass` 安装为开发依赖项 (devDependencies)。这意味着 `sass` 只会在开发环境中使用，而不会包含在生产环境中。

`w`：这个参数可能是一个额外的自定义参数，可能用于指定某些特定的行为或设置。在这种情况下，它可能代表"watch"，表示在安装 `sass`之后，会自动开始监听文件变化并重新编译`sass` 文件。

```shell
pnpm install sass -Dw
```

### 给指定仓库添加依赖

```shell
pnpm -F base add sass
```

这个命令使用 `pnpm` 包管理器，在名为 "base" 的仓库中强制添加 `sass` 依赖项。
在这个命令中：

`-F`: 是一个参数，通常表示 "force"，用于强制执行操作。
`base`: 是指定的仓库名称，表示要在名为 "base" 的仓库中执行操作。
`add sass`: 是要执行的操作，即将 `sass` 包添加为依赖项。

### 给本地仓库添加另一个仓库

```shell
cd base
pnpm -F base add utils
```
