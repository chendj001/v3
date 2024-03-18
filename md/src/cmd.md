### vscoe中`npm`、 `pnpm`无法失败

1. 在vscode终端中输入（需要以管理员身份运行）

```shell
get-executionpolicy
```

2.如果返回的状态是“Restricted”,则说明是受限制的，脚本不能运行（默认状态），此时需要更改设置，输入：

```shell
set-executionpolicy RemoteSigned
```
此设置会更改为允许本地创建的脚本运行。

3. 或者直接添加到系统变量当中

`C:\Users\法本\AppData\Local\Volta\tools\image\packages\pnpm`