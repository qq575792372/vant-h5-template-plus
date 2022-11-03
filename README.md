## 介绍

基于 Vue3+Vite+Pnpm+Vant3+Pinia+Vue-Router+Eslint+Prettier+Husky+lint-staged+commitlint 的开源的移动端模板项目。

## 开始

```bash
# 克隆项目
git clone https://github.com/qq575792372/vant-h5-template-plus.git

# 进入项目目录
cd ivu-admin-pro

# 安装依赖
pnpm i

# 启动服务
pnpm dev

# 或者pnpm start命令快捷启动
pnpm start

# 也可以自定义端口启动
pnpm dev --port=8000

# 支持stage环境启动
pnpm stage
```

服务启动成功后，浏览器访问 [http://localhost:9000](http://localhost:9000)

## 环境

```bash
# 修改接口连接地址
在 .env.[development/staging/production] 中修改 VITE_APP_BASE_SERVE ='http://接口地址'

# 运行环境
在使用pnpm  dev 和 pnpm build dev/stage/prod 会根据.env.XXX里的配置来连接不同环境的接口地址
```

环境配置可以参考 Vite 官网的 [环境变量与模式](https://cn.vitejs.dev/guide/env-and-mode.html#env-files)，使用 **.env[model]** 文件来指定环境变量，变量名建议用`VITE_APP_`开头，获取当前环境的变量用 `import.meta.env.xxx`。

## 打包

```bash
# 构建开发环境
pnpm build:dev

# 构建预发布环境
pnpm build:stage

# 构建生产环境
pnpm build:prod
```

## 预览和修复

```bash
# 预览发布环境效果
pnpm preview

# 代码格式检查
pnpm lint

# 代码格式检查并自动修复
pnpm lint:fix
```

## 规范

#### 1. Git 分支规范

```bash
master：线上主分支
pre：预发布上线版本分支
dev：开发分支
dev/xxx：代表不同版本的开发版
feature/xxx：功能分支
test/xxx：测试分支
fixbug/xxx：修复bug的分支
```

#### 2. Git 提交规范

`由于用了commitlint插件，git commit信息里的类型是必须要写的，并且要带英文冒号和空一格，不然提交会报错。`

```bash
feat: 新功能
fix: 修复 bug
add: 增加内容
del: 删除功能
update: 更新功能
docs: 文档更新
style: 颜色、字体大小等变动（不影响代码运行）
build: 构造工具或相关依赖变更
refactor: 代码重构
revert: 撤销，版本回退
test: 添加或修改测试
perf: 提高性能的改动
chore: 构建过程或辅助工具的变更
ci: CI 配置，脚本文件等改动
```

```bash
# <type>后面必须加英文冒号，并且后跟一个空格
git commit -m <type>(<scope>): <description>

# 举个栗子
git commit -m 'fix: 修复了登录缓存问题'
git commit -m 'fix(user): 修复了用户模块token传参问题'
git commit -m 'docs: 更新了自定义组件文档'
```

#### 3. 使用 Eslint+Prettier 规范代码

项目中使用 `Eslint+Prettier` 结合来规范代码，保存时会自动修复不规范的代码，如果需要在页面强制输出错误信息，需要在 `vite.config.js` 的 plugins 中`vitePluginEslint({lintOnStart:true})` 中开启。

#### 4. 使用 Husky+Lint-Staged+Commitlint 规范提交

`Husky` 是 git 提交的 hooks 钩子工具。  
`Lint-Staged` 插件会监测暂存区的代码，通过了则允许提交。  
`Commitlint` 用来监测 git 提交的信息规范。
