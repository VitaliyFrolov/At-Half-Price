import { useLanguage } from "./useLanguage";

export const useRTL = (className: string) => {
    const language = useLanguage();
    if (language === 'he') {
        return className
    }
};