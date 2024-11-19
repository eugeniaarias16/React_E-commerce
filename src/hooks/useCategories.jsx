
import { useEffect, useState } from 'react';
import { useApi } from './useApi';
import { recategorizeCategories } from '../services/category.service';

export const useCategories = () => {
    const { data: categories, loading, error } = useApi('/products/categories');
    const [organizedCategories, setOrganizedCategories] = useState([]);

    useEffect(() => {
        if (categories.length > 0) {
            const categorizedData = recategorizeCategories(categories);
            setOrganizedCategories(categorizedData);
        }
    }, [categories]);

    return { organizedCategories, loading, error };
};
