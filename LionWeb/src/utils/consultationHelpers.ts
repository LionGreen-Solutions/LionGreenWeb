
// Helper function to safely get numeric value from specs
export const getSpecValue = (specs: any, ...keys: string[]): number => {
  if (!specs || typeof specs !== 'object') return 0;
  
  for (const key of keys) {
    const value = specs[key];
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
      const parsed = parseFloat(value);
      if (!isNaN(parsed)) return parsed;
    }
  }
  return 0;
};

export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
