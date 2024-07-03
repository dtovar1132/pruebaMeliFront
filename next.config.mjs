/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: '@import "./src/styles/index.scss"; \n',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images:{
    domains: ['http2.mlstatic.com']
  }
};

export default nextConfig;
