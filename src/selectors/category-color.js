import { CatColors } from '../constants';

export default (category) => {
    switch (category) {
        case 'home-utilities':
            return CatColors.light_green; 
        case 'transportation':
            return CatColors.med_light_green;
        case 'groceries':
            return CatColors.green
        case 'personal-family-care':
            return CatColors.med_light_green;
        case 'health':
            return CatColors.dark_green;
        case 'insurance':
            return CatColors.blue;
        case 'restaurants-dining':
            return CatColors.yellow;
        case 'shopping-entertainment':
            return CatColors.light_orange;
        case 'travel':
            return CatColors.orange;
        case 'cash-checks-misc':
            return CatColors.dark_orange;
        case 'giving':
            return CatColors.pink;
        case 'business-expenses':
            return CatColors.dark_pink;
        case 'education':
            return CatColors.purple;
        case 'finance':
            return CatColors.dark_purple;
        case 'uncategorized':
            return CatColors.grey;
    }
};
