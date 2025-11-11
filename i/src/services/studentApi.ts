export interface Student {
  _id: string;
  first_name: string;
  last_name: string;
  phone: string;
  adress: string | null;
  all_price_group: number;
  status: 'faol' | 'noactive';
  groups: any[];
  leave_history: any[];
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStudentData {
  first_name: string;
  last_name: string;
  phone: string;
  adress?: string;
  all_price_group?: number;
  group?: string;
}

let mockData: Student[] = [
   {
    _id: "68247dca340f94ebf21afd93",
    first_name: "Davron",
    last_name: "Yusupovvv",
    phone: "998770444646",
    adress: null,
    all_price_group: 2000000,
    status: "faol",
    groups: [{}],
    leave_history: [],
    is_deleted: false,
    createdAt: "2025-05-14T11:26:02.471Z",
    updatedAt: "2025-05-16T20:48:03.343Z"
  },
  {
    _id: "68270bc2c28a4fa9b4abe0d7",
    first_name: "Izzatxon",
    last_name: "Akbarov",
    phone: "+998(99)-999-99-98",
    adress: null,
    all_price_group: 5550000,
    status: "faol",
    groups: [{}],
    leave_history: [],
    is_deleted: false,
    createdAt: "2025-05-16T09:56:18.102Z",
    updatedAt: "2025-05-16T09:56:18.102Z"
  },
  {
    _id: "68270f64c28a4fa9b4abe25d",
    first_name: "Alibek",
    last_name: "Tursunboyev",
    phone: "998888588284",
    adress: null,
    all_price_group: 20019998,
    status: "faol",
    groups: [{}, {}, {}],
    leave_history: [],
    is_deleted: false,
    createdAt: "2025-05-16T10:11:48.112Z",
    updatedAt: "2025-05-16T13:47:23.539Z"
  },
  {
    _id: "68271b32c28a4fa9b4abe6c0",
    first_name: "Dastan",
    last_name: "Zaripov",
    phone: "+998876567889",
    adress: null,
    all_price_group: 1000000,
    status: "faol",
    groups: [{}],
    leave_history: [],
    is_deleted: false,
    createdAt: "2025-05-16T11:02:10.531Z",
    updatedAt: "2025-05-23T15:24:22.990Z"
  },
  {
    _id: "68271e73c28a4fa9b4abe842",
    first_name: "Otabek",
    last_name: "Boltaboyev",
    phone: "998888588284",
    adress: null,
    all_price_group: 20000000,
    status: "faol",
    groups: [{}],
    leave_history: [],
    is_deleted: false,
    createdAt: "2025-05-16T11:16:03.712Z",
    updatedAt: "2025-05-16T11:16:25.820Z"
  },
  {
    _id: "6827a470c28a4fa9b4ac0103",
    first_name: "Diarbek",
    last_name: "Dilmuradovich",
    phone: "+998995633550",
    adress: null,
    all_price_group: 9999,
    status: "faol",
    groups: [{}],
    leave_history: [],
    is_deleted: false,
    createdAt: "2025-05-16T20:47:44.809Z",
    updatedAt: "2025-05-16T20:48:54.172Z"
  },
  {
    _id: "68281baec28a4fa9b4ac049a",
    first_name: "Muhammad",
    last_name: "Sadullayev",
    phone: "+998937476105",
    adress: null,
    all_price_group: 1000000,
    status: "faol",
    groups: [{}],
    leave_history: [],
    is_deleted: false,
    createdAt: "2025-05-17T05:16:30.997Z",
    updatedAt: "2025-05-17T05:17:23.772Z"
  }
];
export const studentApi = {
  async getStudents(): Promise<Student[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockData.filter(student => !student.is_deleted);
  },

  async createStudent(data: CreateStudentData): Promise<Student> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newStudent: Student = {
      _id: `student_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      adress: data.adress || null,
      all_price_group: data.all_price_group || 0,
      status: 'faol',
      groups: data.group ? [{ name: data.group }] : [],
      leave_history: [],
      is_deleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    mockData.push(newStudent);
    return newStudent;
  },

  async updateStudent(id: string, data: Partial<Student>): Promise<Student> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const index = mockData.findIndex(student => student._id === id);
    if (index === -1) throw new Error('Student not found');

    mockData[index] = {
      ...mockData[index],
      ...data,
      updatedAt: new Date().toISOString()
    };

    return mockData[index];
  },

  async deleteStudent(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const index = mockData.findIndex(student => student._id === id);
    if (index === -1) throw new Error('Student not found');

    mockData[index].is_deleted = true;
    mockData[index].status = 'noactive';
    mockData[index].updatedAt = new Date().toISOString();
  },
};

import { useState, useEffect } from 'react';

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await studentApi.getStudents();
      setStudents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const createStudent = async (data: CreateStudentData): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await studentApi.createStudent(data);
      await loadStudents();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yaratishda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateStudent = async (id: string, data: Partial<Student>): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await studentApi.updateStudent(id, data);
      await loadStudents();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yangilashda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await studentApi.deleteStudent(id);
      await loadStudents();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'O\'chirishda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    students,
    loading,
    error,
    createStudent,
    updateStudent,
    deleteStudent,
    refetch: loadStudents
  };
};