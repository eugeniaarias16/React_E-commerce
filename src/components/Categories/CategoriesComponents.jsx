// src/components/CategoriesComponent.jsx
import React, { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi'
import { recategorizeCategories } from '../../services/category.service';
import { useCategories } from '../../hooks/useCategories';

export const CategoriesComponent = () => {

    const {organizedCategories,loading,error}= useCategories(); // Llamado a las nuevas categorias
    
    if (loading) return <p>Cargando categorías...</p>;
    if (error) return <p>Error al cargar categorías: {error.message}</p>;

    return (
        <div>
            <h2>Categorías Organizadas</h2>
            <ul>
                {organizedCategories.map((cat, index) => (
                    <li key={index}>
                        <strong>{cat.category}</strong>
                        <ul>
                            {cat.subcategories.map((subcat, subIndex) => (
                                <li key={subIndex}>
                                    <a href={subcat.url}>{subcat.name}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

