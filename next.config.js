// next.config.js
module.exports = {
    output: 'export',
    images: {
      unoptimized: true,  // 如果你使用了 Next.js 的 Image 组件
    },
    basePath: process.env.NODE_ENV === 'production' ? '/ls' : '',  // 生产环境使用 '/ccc'，本地开发不使用 basePath

    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',  // 替换为你实际的仓库名称
    env: {
      NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    },
  };
  

