export const CACHE_KEYS = {
    POSTS: "cached_posts",
    USERS: "cached_users",
    SETTINGS: "cached_settings",
    POST_METADATA: "cached_post_metadata",
    POST_CONTENT: "cached_post_content"
  };
  
  export function getCachedData<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
  
      const parsed = JSON.parse(raw);
  
      if (parsed.expiry && Date.now() > parsed.expiry) {
        localStorage.removeItem(key);
        return null;
      }
  
      return parsed.data as T;
    } catch (err) {
      console.error("Error parsing cached data:", err);
      return null;
    }
  }
  
  export function setCachedData<T>(key: string, data: T, ttlMinutes = 60): void {
    try {
      const expiry = Date.now() + ttlMinutes * 60 * 1000;
      const payload = {
        data,
        expiry,
      };
      localStorage.setItem(key, JSON.stringify(payload));
    } catch (err) {
      console.error("Error setting cached data:", err);
    }
  }
  
  export function getImageUrl(path?: string): string {
    if (!path) return "/placeholder.png"; // fallback
    if (path.startsWith("http")) return path;
  
    const baseUrl = import.meta.env.VITE_API_URL || "";
    return `${baseUrl}/uploads/${path}`;
  }
  