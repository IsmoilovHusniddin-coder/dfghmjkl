// src/services/useTeachers.ts
import { useState, useEffect } from 'react';

export interface Teacher {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  status: 'active' | 'inactive';
  createdAt: string;
  field: string;
  groups: any[];
  image?: string | null;
}

export interface CreateTeacherData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  field: string;
}

// ВРЕМЕННО: используем mock данные из-за CORS
const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'Murod',
    lastName: 'Tursunov',
    email: 'murod_tursunov@mail.ru',
    phone: '9900000000000',
    subject: 'Matematika',
    status: 'active',
    createdAt: new Date().toISOString(),
    field: 'Matematika',
    groups: [],
    image: null
  },
  {
    id: '2',
    name: 'Olim',
    lastName: 'Sattorov',
    email: 'olim_sattorov@mail.ru',
    phone: '-',
    subject: 'Fizika',
    status: 'active',
    createdAt: new Date().toISOString(),
    field: 'Fizika',
    groups: [],
    image: null
  },
  {
    id: '3',
    name: 'Nigora',
    lastName: 'Sodigova',
    email: 'nigora_sodigova@mail.ru',
    phone: '-',
    subject: 'Ingliz tili',
    status: 'inactive',
    createdAt: new Date().toISOString(),
    field: 'Ingliz tili',
    groups: [],
    image: null
  },
  {
    id: '4',
    name: 'Jasur',
    lastName: 'Mahmudov',
    email: 'jasur_mahmudov@mail.ru',
    phone: '-',
    subject: 'Informatika',
    status: 'active',
    createdAt: new Date().toISOString(),
    field: 'Informatika',
    groups: [],
    image: null
  },
  {
    id: '5',
    name: 'Zilola',
    lastName: 'Eshonova',
    email: 'zilola_eshonova@mail.ru',
    phone: '-',
    subject: 'Biologiya',
    status: 'inactive',
    createdAt: new Date().toISOString(),
    field: 'Biologiya',
    groups: [],
    image: null
  }
];

const teacherApi = {
  async getTeachers(): Promise<Teacher[]> {
    // Временное решение с mock данными
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [...mockTeachers];
  },

  async createTeacher(data: CreateTeacherData): Promise<Teacher> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newTeacher: Teacher = {
      id: Date.now().toString(),
      ...data,
      status: 'active',
      createdAt: new Date().toISOString(),
      groups: [],
      image: null
    };
    mockTeachers.push(newTeacher);
    return newTeacher;
  },

  async updateTeacher(id: string, data: Partial<Teacher>): Promise<Teacher> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockTeachers.findIndex(t => t.id === id);
    if (index !== -1) {
      mockTeachers[index] = { ...mockTeachers[index], ...data };
      return mockTeachers[index];
    }
    throw new Error('Teacher not found');
  },

  async deleteTeacher(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockTeachers.findIndex(t => t.id === id);
    if (index !== -1) {
      mockTeachers.splice(index, 1);
    }
  },
};

export const useTeachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTeachers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await teacherApi.getTeachers();
      setTeachers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  const createTeacher = async (data: CreateTeacherData): Promise<boolean> => {
    setLoading(true);
    try {
      const newTeacher = await teacherApi.createTeacher(data);
      setTeachers(prev => [...prev, newTeacher]);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yaratishda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateTeacher = async (id: string, data: Partial<Teacher>): Promise<boolean> => {
    setLoading(true);
    try {
      const updatedTeacher = await teacherApi.updateTeacher(id, data);
      setTeachers(prev => prev.map(t => t.id === id ? updatedTeacher : t));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yangilashda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteTeacher = async (id: string): Promise<boolean> => {
    setLoading(true);
    try {
      await teacherApi.deleteTeacher(id);
      setTeachers(prev => prev.filter(t => t.id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'O\'chirishda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  return {
    teachers,
    loading,
    error,
    createTeacher,
    updateTeacher,
    deleteTeacher,
    refresh: loadTeachers,
  };
};