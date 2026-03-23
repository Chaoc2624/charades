#!/bin/bash

# 确保遇到错误时停止执行
set -e

echo "🚀 开始构建项目..."
npm run build

echo "📦 准备 Cloudflare Pages 运行时入口环境..."
cp worker.js dist/client/_worker.js

echo "⚡️ 开始部署到 Cloudflare Pages..."
npx wrangler pages deploy dist/client --project-name charades-app

echo "✅ 部署完成！"
