export enum Category {
    ACCESSORIES = 'accessory',
    CASE = 'case',
    HOUSING = 'housing',
    KEYCAP = 'keycap',
    SWITCH = 'switch',
    KEYBOARD = 'keyboard',
}

export const categoryMap: Record<string, Category> = {
    accessory: Category.ACCESSORIES,
    case: Category.CASE,
    housing: Category.HOUSING,
    keycap: Category.KEYCAP,
    switch: Category.SWITCH,
    keyboard: Category.KEYBOARD,
};
