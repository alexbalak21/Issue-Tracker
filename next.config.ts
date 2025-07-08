import type {NextConfig} from "next"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // other config options can go here, like images, redirects, etc.
}

export default nextConfig
