import { useEffect, useState } from "react";
import { apiClient } from "../services/api.service"; 

export const useApi = (endPoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        try {
            console.log(`Llamando a: ${apiClient.baseURL}${endPoint}`);
            const response = await apiClient.get(endPoint);
            setData(response.data);
            console.log("Datos obtenidos:", response.data);
        } catch (error) {
            console.error("Error al obtener data: ", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (endPoint) {
            fetchData();
        }
    }, []);

    return { data, loading, error };
  }