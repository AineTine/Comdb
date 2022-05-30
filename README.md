# Comdb

> Comdb 是一种致力于多平台一致操作的插件协调控制核心，其中`Com`代表`Communicator`，而`db`代表`Database`，即通信（者）数据库
> Comdb主程序被称为`宿主`（`host`），被接入的额外功能被称为`插件`（`plug-in`）,我们希望一个host仅应负责插件间的通信，其余一切部分均由插件系统扩展

## 安装依赖库
```
npm install
```

### 测试启动
```
npm run electron:serve
```

### 打包为exe
```
npm run electron:build
```
