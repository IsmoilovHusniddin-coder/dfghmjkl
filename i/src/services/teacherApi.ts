export interface Teacher {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  field: string;
  groups: Group[];
  status: 'faol' | 'ishdan bo\'shatilgan';
  image: string | null;
  salary: number;
  work_date: string;
  work_end: string | null;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Group {
  _id: string;
  name: string;
  description?: string;
  student_count?: number;
}

export interface CreateTeacherData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  field: string;
  salary?: number;
  work_date?: string;
}

export interface UpdateTeacherData {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  field?: string;
  status?: 'faol' | 'ishdan bo\'shatilgan';
  salary?: number;
  work_end?: string | null;
}
const MOCK_TEACHERS: Teacher[] = [
  {
    createdAt: "2025-05-09T09:55:16.963Z",
    email: "raimjonov03@mail.ru",
    field: "Backend dasturlash",
    first_name: "Davron01",
    groups: [{ _id: "1", name: "Group 1" }, { _id: "2", name: "Group 2" }],
    image: null,
    is_deleted: false,
    last_name: "Raimjonov",
    phone: "+998770444444",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-09T23:50:43.418Z",
    work_date: "2025-05-09T09:54:52.486Z",
    work_end: null,
    _id: "681dd10479f5e3cc474770c0"
  },
  {
    createdAt: "2025-05-09T10:38:41.278Z",
    email: "raimjonov04@mail.ru",
    field: "Backend dasturlash",
    first_name: "Davron01",
    groups: [
      { _id: "1", name: "Group 1" },
      { _id: "2", name: "Group 2" },
      { _id: "3", name: "Group 3" },
      { _id: "4", name: "Group 4" }
    ],
    image: null,
    is_deleted: false,
    last_name: "Raimjonov",
    phone: "+998770444444",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-12T09:49:13.496Z",
    work_date: "2025-05-10T10:17:38.380Z",
    work_end: null,
    _id: "681ddb31a11c844734af588d"
  },
  {
    createdAt: "2025-05-09T10:40:36.351Z",
    email: "malikovshahriyor929@gmail.com",
    field: "Frontend dasturlash",
    first_name: "Shahriyor",
    groups: [],
    image: null,
    is_deleted: true,
    last_name: "Boyyyyyy",
    phone: "+998123123123",
    salary: 0,
    status: "ishdan bo'shatilgan",
    updatedAt: "2025-11-05T11:49:57.418Z",
    work_date: "2025-05-09T09:50:14.938Z",
    work_end: "2025-11-05T11:49:57.416Z",
    _id: "681ddba47dc760d507d330ab"
  },
  {
    createdAt: "2025-05-09T10:45:34.703Z",
    email: "raimjonov05@mail.ru",
    field: "Programming",
    first_name: "Davron01",
    groups: [],
    image: null,
    is_deleted: false,
    last_name: "Raimjonov",
    phone: "+998770444444",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-09T10:45:34.703Z",
    work_date: "2025-05-09T10:45:25.674Z",
    work_end: null,
    _id: "681ddcce0c2c97e4fa6e6f64"
  },
  {
    createdAt: "2025-05-09T11:20:56.687Z",
    email: "malikovshahriyor9@gmail.com",
    field: "Backend Dasturlash",
    first_name: "Shahriyor",
    groups: [],
    image: null,
    is_deleted: true,
    last_name: "Malikov",
    phone: "+998123123123",
    salary: 0,
    status: "ishdan bo'shatilgan",
    updatedAt: "2025-05-12T12:40:09.074Z",
    work_date: "2025-05-09T11:13:33.094Z",
    work_end: "2025-05-12T12:40:09.074Z",
    _id: "681de51840d51c4c59175fcb"
  },
  {
    createdAt: "2025-05-09T11:27:02.234Z",
    email: "davron_raimjonov46@mail.ru",
    field: ".NET",
    first_name: "Davron",
    groups: [{ _id: "1", name: "Group 1" }, { _id: "2", name: "Group 2" }],
    image: null,
    is_deleted: true,
    last_name: "Raimjonov",
    phone: "+998123123123",
    salary: 0,
    status: "ishdan bo'shatilgan",
    updatedAt: "2025-05-16T20:43:35.400Z",
    work_date: "2025-05-16T20:43:28.239Z",
    work_end: "2025-05-16T20:43:35.400Z",
    _id: "681de686832f15af2b58ae3f"
  },
  {
    createdAt: "2025-05-10T09:08:51.735Z",
    email: "alibekteacher@mail.ru",
    field: "Mobilografia",
    first_name: "Alibek",
    groups: [{ _id: "1", name: "Group 1" }, { _id: "2", name: "Group 2" }],
    image: null,
    is_deleted: false,
    last_name: "Tursunboyev",
    phone: "+998888588284",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-16T11:01:01.754Z",
    work_date: "2025-05-09T11:22:11.347Z",
    work_end: null,
    _id: "681f17a3832f15af2b58cb9a"
  },
  {
    createdAt: "2025-05-10T09:13:12.043Z",
    email: "alibekgithub01@gmail.com",
    field: "Flutter dasturlash",
    first_name: "Alibek",
    groups: [
      { _id: "1", name: "Group 1" },
      { _id: "2", name: "Group 2" },
      { _id: "3", name: "Group 3" },
      { _id: "4", name: "Group 4" },
      { _id: "5", name: "Group 5" }
    ],
    image: null,
    is_deleted: false,
    last_name: "Tursunboyev",
    phone: "+998888588284",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-13T09:21:03.804Z",
    work_date: "2025-05-09T11:22:11.347Z",
    work_end: null,
    _id: "681f18a8832f15af2b58cbd9"
  },
  {
    _id: "682079c77ce73eda8f1037ef",
    first_name: "Shahriyor",
    last_name: "Malikov",
    email: "malikovs@gmail.com",
    phone: "+998123123123",
    field: "Frontend dasturlash",
    groups: [],
    status: "faol",
    image: null,
    salary: 0,
    work_date: "2025-05-12T00:00:00.000Z",
    work_end: null,
    is_deleted: false,
    createdAt: "2025-05-12T00:00:00.000Z",
    updatedAt: "2025-05-12T00:00:00.000Z"
  },
  {
    createdAt: "2025-05-12T04:33:33.749Z",
    email: "tursunboyevfrontend@gmail.com",
    field: "Nemis tili",
    first_name: "Alibek",
    groups: [{ _id: "1", name: "Group 1" }, { _id: "2", name: "Group 2" }],
    image: null,
    is_deleted: false,
    last_name: "Tursunboyev",
    phone: "+998888588284",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-12T09:35:08.081Z",
    work_date: "2025-05-12T04:34:18.555Z",
    work_end: null,
    _id: "68217a1d7ce73eda8f10419c"
  },
  {
    createdAt: "2025-05-12T11:12:40.402Z",
    email: "abzakirov@maisl.ru",
    field: "Arab tili",
    first_name: "Abdulloh",
    groups: [{ _id: "1", name: "Group 1" }],
    image: null,
    is_deleted: false,
    last_name: "Zokirov",
    phone: "+998987654345",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-13T08:55:24.899Z",
    work_date: "2025-05-12T08:47:04.590Z",
    work_end: null,
    _id: "6821d7a82e7d38fe7c43cc28"
  },
  {
    createdAt: "2025-05-12T11:24:19.790Z",
    email: "web@mail.com",
    field: "Prompt Enginering",
    first_name: "Otabek",
    groups: [],
    image: null,
    is_deleted: false,
    last_name: "Web",
    phone: "+9989876543",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-12T11:24:19.790Z",
    work_date: "2025-05-12T08:47:04.590Z",
    work_end: null,
    _id: "6821da632e7d38fe7c43d97b"
  },
  {
    createdAt: "2025-05-13T09:39:48.398Z",
    email: "user@mail.ru",
    field: "Flutter dasturlash",
    first_name: "Muhammad",
    groups: [],
    image: null,
    is_deleted: true,
    last_name: "Sadullayev",
    phone: "+998937476105",
    salary: 0,
    status: "ishdan bo'shatilgan",
    updatedAt: "2025-05-14T09:15:26.691Z",
    work_date: "2025-05-13T08:47:27.887Z",
    work_end: "2025-05-14T09:15:26.691Z",
    _id: "682313643af5b324caf828d7"
  },
  {
    createdAt: "2025-05-14T09:17:23.776Z",
    email: "user2@mail.ru",
    field: "Flutter dasturlash",
    first_name: "Muhammad",
    groups: [],
    image: null,
    is_deleted: false,
    last_name: "Sadullayev",
    phone: "+998937476105",
    salary: 0,
    status: "faol",
    updatedAt: "2025-05-14T09:17:23.776Z",
    work_date: "2025-05-14T09:03:07.167Z",
    work_end: null,
    _id: "68245fa3fed4241b15982f26"
  }
];

const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 500));

interface GetTeachersOptions {
  includeDeleted?: boolean;
  status?: 'faol' | 'ishdan bo\'shatilgan' | 'all';
}

export const teacherApi = {
  async getTeachers(options: GetTeachersOptions = {}): Promise<Teacher[]> {
    await simulateApiDelay();
    
    const { includeDeleted = false, status = 'all' } = options;
    
    let filteredTeachers = MOCK_TEACHERS;
    
    if (!includeDeleted) {
      filteredTeachers = filteredTeachers.filter(teacher => !teacher.is_deleted);
    }
    
    if (status !== 'all') {
      filteredTeachers = filteredTeachers.filter(teacher => teacher.status === status);
    }
    
    return filteredTeachers;
  },

  async getTeacherById(id: string): Promise<Teacher> {
    await simulateApiDelay();
    
    const teacher = MOCK_TEACHERS.find(t => t._id === id);
    if (!teacher) {
      throw new Error('Teacher not found');
    }
    
    return teacher;
  },

  async createTeacher(data: CreateTeacherData): Promise<Teacher> {
    await simulateApiDelay();
    
    const newTeacher: Teacher = {
      ...data,
      _id: Date.now().toString(),
      groups: [],
      status: 'faol',
      image: null,
      salary: data.salary || 0,
      work_date: data.work_date || new Date().toISOString(),
      work_end: null,
      is_deleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    MOCK_TEACHERS.push(newTeacher);
    return newTeacher;
  },

  async updateTeacher(id: string, data: UpdateTeacherData): Promise<Teacher> {
    await simulateApiDelay();
    
    const index = MOCK_TEACHERS.findIndex(teacher => teacher._id === id);
    if (index === -1) {
      throw new Error('Teacher not found');
    }
    
    const updatedTeacher = {
      ...MOCK_TEACHERS[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    
    MOCK_TEACHERS[index] = updatedTeacher;
    return updatedTeacher;
  },

  async deleteTeacher(id: string): Promise<void> {
    await simulateApiDelay();
    
    const index = MOCK_TEACHERS.findIndex(teacher => teacher._id === id);
    if (index === -1) {
      throw new Error('Teacher not found');
    }
    
   
    MOCK_TEACHERS[index] = {
      ...MOCK_TEACHERS[index],
      is_deleted: true,
      status: 'ishdan bo\'shatilgan',
      work_end: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  },
};

import { useState, useEffect, useCallback } from 'react';

interface UseTeachersOptions {
  includeDeleted?: boolean;
  autoLoad?: boolean;
}

export const useTeachers = (options: UseTeachersOptions = {}) => {
  const { includeDeleted = false, autoLoad = true } = options;
  
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const loadTeachers = useCallback(async (loadOptions?: GetTeachersOptions) => {
    setLoading(true);
    setError(null);
    try {
      const finalOptions = { includeDeleted, ...loadOptions };
      const data = await teacherApi.getTeachers(finalOptions);
      setTeachers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  }, [includeDeleted]);

  const getTeacherById = async (id: string): Promise<Teacher | null> => {
    setError(null);
    try {
      const teacher = await teacherApi.getTeacherById(id);
      setSelectedTeacher(teacher);
      return teacher;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'O\'qishda xatolik');
      return null;
    }
  };

  const createTeacher = async (data: CreateTeacherData): Promise<boolean> => {
    setError(null);
    try {
      const newTeacher = await teacherApi.createTeacher(data);
      setTeachers(prev => [...prev, newTeacher]);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yaratishda xatolik');
      return false;
    }
  };

  const updateTeacher = async (id: string, data: UpdateTeacherData): Promise<boolean> => {
    setError(null);
    try {
      const updatedTeacher = await teacherApi.updateTeacher(id, data);
      setTeachers(prev => prev.map(t => t._id === id ? updatedTeacher : t));
      
      if (selectedTeacher && selectedTeacher._id === id) {
        setSelectedTeacher(updatedTeacher);
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yangilashda xatolik');
      return false;
    }
  };

  const deleteTeacher = async (id: string): Promise<boolean> => {
    setError(null);
    try {
      await teacherApi.deleteTeacher(id);
      
      if (includeDeleted) {
       
        await loadTeachers();
      } else {
       
        setTeachers(prev => prev.filter(t => t._id !== id));
      }
     
      if (selectedTeacher && selectedTeacher._id === id) {
        setSelectedTeacher(null);
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'O\'chirishda xatolik');
      return false;
    }
  };

  const clearError = () => setError(null);
  const clearSelectedTeacher = () => setSelectedTeacher(null);

  useEffect(() => {
    if (autoLoad) {
      loadTeachers();
    }
  }, [loadTeachers, autoLoad]);

  return {
    teachers,
    loading,
    error,
    selectedTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherById,
    refresh: loadTeachers,
    clearError,
    clearSelectedTeacher,
    setSelectedTeacher,
  };
};

export const teacherUtils = {
  getFullName(teacher: Teacher): string {
    return `${teacher.first_name} ${teacher.last_name}`;
  },

  getGroupCount(teacher: Teacher): number {
    return teacher.groups.length;
  },

  isActive(teacher: Teacher): boolean {
    return teacher.status === 'faol' && !teacher.is_deleted;
  },

  getWorkDuration(teacher: Teacher): string {
    const startDate = new Date(teacher.work_date);
    const endDate = teacher.work_end ? new Date(teacher.work_end) : new Date();
    
    const diffMs = endDate.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) {
      return `${diffDays} kun`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} oy`;
    } else {
      const years = Math.floor(diffDays / 365);
      const remainingMonths = Math.floor((diffDays % 365) / 30);
      return `${years} yil ${remainingMonths} oy`;
    }
  },

  formatSalary(salary: number): string {
    return new Intl.NumberFormat('uz-UZ').format(salary) + ' so\'m';
  }
};