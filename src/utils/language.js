// utils/language.js
const KEY = "site_language";

export const saveLanguage = (lang) => {
  localStorage.setItem(KEY, lang);
};

export const getSavedLanguage = () => {
  return localStorage.getItem(KEY);
};
