### git 删除已不在的本地分支

如果要删除本地仓库中已不存在的分支，可以使用以下命令：

```shell
git fetch --prune
```

这个命令会从远程仓库获取最新的分支信息，并删除本地仓库中已不存在的分支。
