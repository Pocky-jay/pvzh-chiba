# PVZH 千叶重铸版 · 文档站

基于 VitePress 的静态文档站，用于介绍千叶重铸版的改动、安装方式与常见问题。

## 本地开发

```bash
npm install
npm run docs:dev      # http://localhost:5173
```

## 构建

```bash
npm run docs:build    # 输出到 docs/.vitepress/dist
npm run docs:preview  # 本地预览构建结果
```

页面使用绝对路径（`/assets/...`），**不能双击 `index.html` 打开**，需要 HTTP 服务。

## 发布到 GitHub Pages

1. 新建 GitHub 仓库（例如 `pvzh-chiba`），把本目录推送到 `main` 分支。
2. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 之后每次 push 到 `main`，`.github/workflows/deploy.yml` 会自动构建并发布。
4. 访问 `https://<用户名>.github.io/<仓库名>/`。

`workflow` 里用 `BASE_PATH: /${{ github.event.repository.name }}/` 自动取仓库名作为子路径。
如果仓库本身是 `<用户名>.github.io`（根站点），把该值改为 `/`。

本地如需验证子路径构建：

```powershell
$env:BASE_PATH='/pvzh-chiba/'; npm run docs:build
```

> 注意：Git Bash 会把以 `/` 开头的环境变量值当成路径改写，验证 base 请用 PowerShell。

## 离线说明

站点不加载外部字体或 CDN（主题使用 `vitepress/theme-without-fonts`），搜索为构建期内置，
构建与浏览均不依赖网络。唯一的外部依赖是部署后的域名本身。
