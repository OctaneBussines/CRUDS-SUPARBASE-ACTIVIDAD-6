import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

export const useUser = (userId) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener usuario por ID
    const fetchUser = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('id', id)
                .single();
            if (error) throw error;
            setUser(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchUser(userId);
        }
    }, [userId]);

    return {
        user,
        loading,
        error,
        fetchUser,
    };
};