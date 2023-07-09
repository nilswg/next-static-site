/** @type {import('next').NextConfig} */
const nextDevConfig = {}

/** @type {import('next').NextConfig} */
const nextProdConfig = {
  output: 'export',
  distDir: '/out',
}

module.exports =
  process.env.NODE_ENV !== 'production' ? nextDevConfig : nextProdConfig
