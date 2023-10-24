import CacheKey from "@/constants/cache-key";
import { type LayoutSettings } from "@/config/layouts";

//#region 系统布局配置
export const getConfigLayout = () => {
  const json = localStorage.getItem(CacheKey.CONFIG_LAYOUT);
  return json ? (JSON.parse(json) as LayoutSettings) : null;
};

export const setConfigLayout = (settings: LayoutSettings) => {
  localStorage.setItem(CacheKey.CONFIG_LAYOUT, JSON.stringify(settings));
};

//#region 侧边栏状态
export const getSidebarStatus = () => {
  return localStorage.getItem(CacheKey.SIDEBAR_STATUS);
};
