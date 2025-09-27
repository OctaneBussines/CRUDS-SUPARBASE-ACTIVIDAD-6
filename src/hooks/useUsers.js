import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'
export const useUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // Obtener todos los usuarios
    const fetchUsers = async () => {
        setLoading(true)
        setError(null)
        try {
            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .order('created_at', { ascending: false })
            if (error) throw error
            setUsers(data || [])
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    // Crear usuario
    const createUser = async (userData) => {
        setLoading(true)
        setError(null)
        try {
            const { data, error } = await supabase
                .from('usuarios')
                .insert([userData])
                .select()
            if (error) throw error
            if (data && data[0]) {
                setUsers(prev => [data[0], ...prev])
            }
            return { success: true, data: data[0] }
        } catch (err) {
            setError(err.message)
            return { success: false, error: err.message }
        } finally {
            setLoading(false)
        }
    }
    // Actualizar usuario
    const updateUser = async (id, userData) => {
        setLoading(true)
        setError(null)
        try {
            const { data, error } = await supabase
                .from('usuarios')
                .update(userData)
                .eq('id', id)
                .select()
            if (error) throw error
            if (data && data[0]) {
                setUsers(prev =>
                    prev.map(user => user.id === id ? data[0] : user)
                )
            }
            return { success: true, data: data[0] }
        } catch (err) {
            setError(err.message)
            return { success: false, error: err.message }
        } finally {
            setLoading(false)
        }
    }
    // Eliminar usuario
    const deleteUser = async (id) => {
        setLoading(true)
        setError(null)
        try {
            const { error } = await supabase
                .from('usuarios')
                .delete()
                .eq('id', id)
            if (error) throw error
            setUsers(prev => prev.filter(user => user.id !== id))
            return { success: true }
        } catch (err) {
            setError(err.message)
            return { success: false, error: err.message }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return {
        users,
        loading,
        error,
        fetchUsers,
        createUser,
        updateUser,
        deleteUser
    }
}