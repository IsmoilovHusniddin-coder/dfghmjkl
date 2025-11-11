export interface Manager {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  role: string;
  status: 'faol' | 'ishdan bo\'shatilgan';
  createdAt: string;
}

export interface CreateManagerData {
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  role: string;
}

// Сохраняем данные как есть
const MOCK_DATA = [
  {
    active: true,
    createdAt: "2025-04-28T11:09:57.163Z",
    email: "davron_raimjonov@mail.ru",
    first_name: "Davron",
    image: "https://res.cloudinary.com/dpavjxpr6/image/upload/v1746183237/uploads/athutvryrubfedwdrtzl.png",
    is_deleted: false,
    last_name: "Raimjonov",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-02T10:59:30.133Z",
    work_date: "2025-04-28T19:00:00.000Z",
    work_end: null,
    _id: "680f6205d6e33f7192b09c20"
  },
  {
    active: true,
    createdAt: "2025-04-29T09:28:28.861Z",
    email: "Shhhhh@gmail.com",
    first_name: "Shhhhh222",
    image: "",
    is_deleted: false,
    last_name: "Shhhhh",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-06-04T05:56:38.656Z",
    work_date: "2025-04-29T19:00:00.000Z",
    work_end: null,
    _id: "68109bbcd6e33f7192b0f86f"
  },
  {
    active: true,
    createdAt: "2025-04-29T10:29:13.597Z",
    email: "abzakirov@mail.ru",
    first_name: "Abdulloh",
    image: "https://res.cloudinary.com/dpavjxpr6/image/upload/v1747217665/uploads/hgy9xwdsiplpxrs5rxez.jpg",
    is_deleted: false,
    last_name: "Zokirov",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-17T05:40:36.484Z",
    work_date: "2025-04-29T19:00:00.000Z",
    work_end: null,
    _id: "6810a9f9a2f59e2ba9534159"
  },
  {
    active: true,
    createdAt: "2025-04-29T10:52:40.507Z",
    email: "doston0110@mail.ru",
    first_name: "Dostonbek",
    image: "https://res.cloudinary.com/dpavjxpr6/image/upload/v1747221525/uploads/wppuehum2ers4gau7nt7.jpg",
    is_deleted: false,
    last_name: "Zaripov",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-14T11:18:45.923Z",
    work_date: "2025-05-01T17:30:26.494Z",
    work_end: null,
    _id: "6810af781d0f619ee9d67c0f"
  },
  {
    active: true,
    createdAt: "2025-04-30T07:04:59.528Z",
    email: "alibek@mail.ru",
    first_name: "Alibek",
    image: "https://res.cloudinary.com/dpavjxpr6/image/upload/v1747130622/uploads/ncy4zxuo7s8btxhlkmsl.png",
    is_deleted: false,
    last_name: "Tursunboyev",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-13T10:03:43.459Z",
    work_date: "2025-04-30T07:04:57.258Z",
    work_end: null,
    _id: "6811cb9b10d2f71117d29dda"
  },
  {
    active: true,
    createdAt: "2025-05-01T07:09:07.912Z",
    email: "A@gmail.com",
    first_name: "ASasass",
    image: "",
    is_deleted: false,
    last_name: "a",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-07T11:36:12.511Z",
    work_date: "2025-05-02T00:35:13.746Z",
    work_end: null,
    _id: "68131e13b7d9ef0428713da5"
  },
  {
    active: false,
    createdAt: "2025-05-01T12:31:44.059Z",
    email: "alI@mail.ru",
    first_name: "ali",
    image: "",
    is_deleted: true,
    last_name: "ali",
    leave_history: [],
    role: "manager",
    status: "ishdan bo'shatilgan",
    updatedAt: "2025-05-16T18:48:33.621Z",
    work_date: "2025-05-02T00:36:58.143Z",
    work_end: "2025-05-16T18:48:33.163Z",
    _id: "681369afa10fcb5c7acf4f3c"
  },
  {
    active: false,
    createdAt: "2025-05-01T12:31:45.168Z",
    email: "alI@mail.ru",
    first_name: "ali",
    image: "",
    is_deleted: true,
    last_name: "ali",
    leave_history: [],
    role: "manager",
    status: "ishdan bo'shatilgan",
    updatedAt: "2025-05-01T12:32:04.188Z",
    work_date: "2025-05-01T12:31:42.442Z",
    work_end: "2025-05-01T12:32:04.188Z",
    _id: "681369b1a10fcb5c7acf4f3e"
  },
  {
    active: false,
    createdAt: "2025-05-01T12:32:42.060Z",
    email: "malikovshahriyor@gmail.com",
    first_name: "Shahriyor",
    image: "https://res.cloudinary.com/dpavjxpr6/image/upload/v1746466558/uploads/tlmsdozmuazg5qym34j9.jpg",
    is_deleted: true,
    last_name: "Malikov",
    leave_history: [],
    role: "manager",
    status: "ishdan bo'shatilgan",
    updatedAt: "2025-05-16T18:51:32.776Z",
    work_date: "2025-05-01T12:32:39.538Z",
    work_end: "2025-05-16T18:51:32.776Z",
    _id: "681369e9a10fcb5c7acf52b8"
  },
  {
    active: true,
    createdAt: "2025-05-06T09:16:25.221Z",
    email: "user@mail.ru",
    first_name: "Muhammad",
    image: "https://res.cloudinary.com/dpavjxpr6/image/upload/v1747469985/uploads/vkl0gnpiapa9c1dvyyeu.png",
    is_deleted: false,
    last_name: "Sadullayev",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-17T08:19:45.740Z",
    work_date: "2025-05-06T00:00:00.000Z",
    work_end: null,
    _id: "6819d36990f1bceea111e6ee"
  },
  {
    active: true,
    createdAt: "2025-05-07T11:08:14.873Z",
    email: "davron_raimjonov00@mail.ru",
    first_name: "Davronn",
    image: "",
    is_deleted: false,
    last_name: "Raimjonov",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-07T11:08:14.873Z",
    work_date: "2025-05-07T11:08:11.440Z",
    work_end: null,
    _id: "681b3f1eb7ac23d079479fba"
  },
  {
    active: true,
    createdAt: "2025-05-07T11:22:47.179Z",
    email: "alibek00@mail.ru",
    first_name: "Alibek",
    image: "",
    is_deleted: false,
    last_name: "Tursunboyev",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-07T11:22:47.179Z",
    work_date: "2025-05-07T11:22:43.762Z",
    work_end: null,
    _id: "681b4287b7ac23d07947a3cd"
  },
  {
    active: true,
    createdAt: "2025-05-07T11:37:08.774Z",
    email: "asdf@mail.ru",
    first_name: "asd",
    image: "",
    is_deleted: false,
    last_name: "asd",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-07T11:37:08.774Z",
    work_date: "2025-05-07T11:37:05.066Z",
    work_end: null,
    _id: "681b45e4b7ac23d07947a766"
  },
  {
    active: true,
    createdAt: "2025-05-07T11:37:10.079Z",
    email: "asdf@mail.ru",
    first_name: "asd",
    image: "",
    is_deleted: false,
    last_name: "asd",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-07T11:37:10.079Z",
    work_date: "2025-05-07T11:37:06.628Z",
    work_end: null,
    _id: "681b45e6b7ac23d07947a768"
  },
  {
    active: true,
    createdAt: "2025-05-07T11:37:51.283Z",
    email: "asd@gmail.com",
    first_name: "asd",
    image: "",
    is_deleted: false,
    last_name: "asd",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-07T11:37:51.283Z",
    work_date: "2025-05-07T11:37:46.090Z",
    work_end: null,
    _id: "681b460fb7ac23d07947a778"
  },
  {
    active: true,
    createdAt: "2025-05-07T11:37:51.477Z",
    email: "asd@gmail.com",
    first_name: "asd",
    image: "",
    is_deleted: false,
    last_name: "asd",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-07T11:37:51.477Z",
    work_date: "2025-05-07T11:37:45.879Z",
    work_end: null,
    _id: "681b460fb7ac23d07947a77a"
  },
  {
    active: true,
    createdAt: "2025-05-07T11:38:12.886Z",
    email: "sadasd@mail.ru",
    first_name: "asddasd",
    image: "",
    is_deleted: false,
    last_name: "dsasad",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-07T11:38:12.886Z",
    work_date: "2025-05-07T11:38:09.487Z",
    work_end: null,
    _id: "681b4624b7ac23d07947a7df"
  },
  {
    active: false,
    createdAt: "2025-05-09T08:11:27.169Z",
    email: "abzakirosv@mail.ru",
    first_name: "aziz",
    image: "",
    is_deleted: true,
    last_name: "azizov",
    leave_history: [],
    role: "manager",
    status: "ishdan bo'shatilgan",
    updatedAt: "2025-05-14T11:24:50.948Z",
    work_date: "2025-05-08T19:00:00.000Z",
    work_end: "2025-05-14T11:24:50.948Z",
    _id: "681db8afcab5a33c3a7b76ac"
  },
  {
    active: true,
    createdAt: "2025-05-30T11:49:00.704Z",
    email: "fghgh@gmail.com",
    first_name: "gtfgf",
    image: "",
    is_deleted: false,
    last_name: "ggfhgfgfgh",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-05-30T11:49:00.704Z",
    work_date: "2025-05-30T00:00:00.000Z",
    work_end: null,
    _id: "68399b2c0025e4912ee5b525"
  },
  {
    active: true,
    createdAt: "2025-06-04T05:57:26.986Z",
    email: "usern88@mail.ru",
    first_name: "Davron",
    image: "",
    is_deleted: false,
    last_name: "Raimjonov",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-11-05T06:37:45.201Z",
    work_date: "2025-04-29T00:00:00.000Z",
    work_end: null,
    _id: "683fe0469c8f403fb51c4d8f"
  },
  {
    active: true,
    createdAt: "2025-11-05T12:23:50.528Z",
    email: "1111@gamil.com",
    first_name: "Asadbek",
    image: "",
    is_deleted: false,
    last_name: "Davlatov",
    leave_history: [],
    role: "manager",
    status: "faol",
    updatedAt: "2025-11-05T12:23:50.528Z",
    work_date: "2025-11-05T00:00:00.000Z",
    work_end: null,
    _id: "690b41d62001c680fa723dd6"
  }
];
const transformManagerData = (apiData: any): Manager => ({
  id: apiData._id,
  name: apiData.first_name,
  lastName: apiData.last_name,
  email: apiData.email,
  phone: apiData.phone || '',
  role: apiData.role,
  status: apiData.status,
  createdAt: apiData.createdAt
});
const transformCreateData = (data: CreateManagerData): any => ({
  first_name: data.name,
  last_name: data.lastName,
  email: data.email,
  phone: data.phone,
  role: data.role,
  status: 'faol',
  createdAt: new Date().toISOString(),
  _id: Math.random().toString(36).substr(2, 9), 
  active: true,
  is_deleted: false,
  leave_history: [],
  work_date: new Date().toISOString(),
  work_end: null
});

export const managerApi = {
  async getManagers(): Promise<Manager[]> {
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    
    return MOCK_DATA.map(transformManagerData);
  },

  async createManager(data: CreateManagerData): Promise<Manager> {
  
    await new Promise(resolve => setTimeout(resolve, 500));
    const newManagerData = transformCreateData(data);
    MOCK_DATA.push(newManagerData);
    
    return transformManagerData(newManagerData);
  },

  async updateManager(id: string, data: Partial<Manager>): Promise<Manager> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const managerIndex = MOCK_DATA.findIndex(item => item._id === id);
    
    if (managerIndex === -1) {
      throw new Error('Manager not found');
    }

    const updatedData = {
      ...MOCK_DATA[managerIndex],
      ...(data.name && { first_name: data.name }),
      ...(data.lastName && { last_name: data.lastName }),
      ...(data.email && { email: data.email }),
      ...(data.phone !== undefined && { phone: data.phone }),
      ...(data.role && { role: data.role }),
      ...(data.status && { status: data.status }),
      updatedAt: new Date().toISOString()
    };

    MOCK_DATA[managerIndex] = updatedData;
    
    return transformManagerData(updatedData);
  },

  async deleteManager(id: string): Promise<void> {
  
    await new Promise(resolve => setTimeout(resolve, 500));
  
    const managerIndex = MOCK_DATA.findIndex(item => item._id === id);
    
    if (managerIndex === -1) {
      throw new Error('Manager not found');
    }
    MOCK_DATA[managerIndex] = {
      ...MOCK_DATA[managerIndex],
      is_deleted: true,
      status: "ishdan bo'shatilgan",
      active: false,
      work_end: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  },
};

import { useState, useEffect } from 'react';

export const useManagers = () => {
  const [managers, setManagers] = useState<Manager[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadManagers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await managerApi.getManagers();
      const activeManagers = data.filter(manager => 
        manager.status === 'faol' || !MOCK_DATA.find(item => item._id === manager.id)?.is_deleted
      );
      setManagers(activeManagers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  const createManager = async (data: CreateManagerData): Promise<boolean> => {
    setLoading(true);
    try {
      const newManager = await managerApi.createManager(data);
      setManagers(prev => [...prev, newManager]);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yaratishda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateManager = async (id: string, data: Partial<Manager>): Promise<boolean> => {
    setLoading(true);
    try {
      const updatedManager = await managerApi.updateManager(id, data);
      setManagers(prev => prev.map(m => m.id === id ? updatedManager : m));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yangilashda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteManager = async (id: string): Promise<boolean> => {
    setLoading(true);
    try {
      await managerApi.deleteManager(id);
      setManagers(prev => prev.filter(m => m.id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'O\'chirishda xatolik');
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadManagers();
  }, []);

  return {
    managers,
    loading,
    error,
    createManager,
    updateManager,
    deleteManager,
    refresh: loadManagers,
  };
};