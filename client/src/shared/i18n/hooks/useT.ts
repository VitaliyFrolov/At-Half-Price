import { useTranslation } from "react-i18next";

export const useT = (ns?: [string]) => {
    const { t } = useTranslation(ns);
    return t
};