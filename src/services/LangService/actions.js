export const ACTIONS = {
    CHANGE_LANG: 'LANG_SERVICE_CHANGE_LANG'
};

export const langServiceChangLang = (lang) => {
    return {
        type: ACTIONS.CHANGE_LANG,
        lang,
    }
}