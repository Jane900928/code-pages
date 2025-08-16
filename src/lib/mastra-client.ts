import { MastraClient } from "@mastra/client-js";

// 根据环境自动选择服务器地址
const baseUrl = import.meta.env.DEV
  ? "http://localhost:4111" // 开发环境
  : "https://test-agents.konglin928.workers.dev/"; // 生产环境

export const mastraClient = new MastraClient({
  baseUrl,
  retries: 3,
  backoffMs: 300,
  maxBackoffMs: 5000,
});
