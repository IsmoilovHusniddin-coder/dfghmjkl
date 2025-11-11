export interface Admin {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  image?: string;
  phone?: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: string;
}


const mockAdmins: Admin[] = [
  {
    _id: '6801e659328776ce5ffc42a5',
    first_name: 'Davron',
    last_name: 'Raimjonov1',
    email: 'davron_raimjonov@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    _id: '68061341840d7eaba2f5481f',
    first_name: 'Izzatxon',
    last_name: 'Akbarov',
    email: 'akbarov@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1745847455/uploads/gpkzhn6qv637o2zh5i5r.png',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-16T09:15:00Z'
  },
  {
    _id: '680613c6840d7eaba2f54828',
    first_name: 'Otabek',
    last_name: 'Boltaboyev',
    email: 'otabek@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1745835058/uploads/cgefpzx2xgfw17tjfinv.jpg',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-16T09:20:00Z'
  },
  {
    _id: '6806145e47b273513aef0c51',
    first_name: 'Alibekkk',
    last_name: 'Tursunboyev',
    email: 'alibek1@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-16T09:25:00Z'
  },
  {
    _id: '6806147b47b273513aef0c55',
    first_name: 'Sevara',
    last_name: 'Nematullayev',
    email: 'sevara1@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-16T09:26:00Z'
  },
  {
    _id: '680614a947b273513aef0c59',
    first_name: 'Dostonbek',
    last_name: 'Zaripov',
    email: 'dostonbek@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1745847797/uploads/yomffrbashk5r37rpy6g.jpg',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-16T09:27:00Z'
  },
  {
    _id: '680614db47b273513aef0c5d',
    first_name: 'Diar',
    last_name: 'Dilmuradovich',
    email: 'dilmuradovid@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1746092469/uploads/tsioryf8kdzbaizdvggi.jpg',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-16T09:28:00Z'
  },
  {
    _id: '6806150f47b273513aef0c62',
    first_name: 'dias',
    last_name: 'Azimoov',
    email: 'dias@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1746615768/uploads/hawadpphunkisixi5myl.jpg',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-16T09:29:00Z'
  },
  {
    _id: '68072e3e8ea266cd24343ff5',
    first_name: 'Abdulloh',
    last_name: 'Zokirov',
    email: 'abzakirov@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1746002615/uploads/ulfm7eplm3xolprmecex.jpg',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-17T08:30:00Z'
  },
  {
    _id: '680ca1e220c6ceb93fcc1602',
    first_name: 'Muhammadjon1',
    last_name: 'Sadullayev',
    email: 'muhammad1@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T11:15:00Z'
  },
  {
    _id: '680ca20220c6ceb93fcc1606',
    first_name: 'Shahriyor',
    last_name: 'Malikov',
    email: 'malikov00@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T11:20:00Z'
  },
  {
    _id: '680cba4803a2f334cdce1e16',
    first_name: 'Ali',
    last_name: 'Tursunboyev',
    email: 'tursunboyev@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T13:10:00Z'
  },
  {
    _id: '680cbaaf03a2f334cdce1e26',
    first_name: 'Shahriyor',
    last_name: 'Malikov',
    email: 'malikov@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T13:15:00Z'
  },
  {
    _id: '680cbc9c03a2f334cdce1f12',
    first_name: 'Alibek',
    last_name: 'Tursunboyev',
    email: 'alibekgithub@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1745847406/uploads/uu8o61pkgi6vvlvkjegu.png',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T13:25:00Z'
  },
  {
    _id: '680cbe3f76b57c1f30b383b9',
    first_name: 'Shahriyor',
    last_name: 'Malikov',
    email: 'malikovshahriyor929@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1746353586/uploads/tpnxx3xhkh0xooift8td.png',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T13:35:00Z'
  },
  {
    _id: '680cbef776b57c1f30b383f6',
    first_name: 'alibek',
    last_name: 'tursunbayev',
    email: 'alibektursunbayev@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T13:40:00Z'
  },
  {
    _id: '680cbfc676b57c1f30b38439',
    first_name: 'Alibek1',
    last_name: 'tursun',
    email: 'tursun@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T13:45:00Z'
  },
  {
    _id: '680d14605ec9ae527e6a791b',
    first_name: 'DostonekShit',
    last_name: 'ZaripovNigga',
    email: 'dastann@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-20T15:30:00Z'
  },
  {
    _id: '680f463e803f05e108b9969f',
    first_name: 'Muhammad',
    last_name: 'Sadullayev',
    email: 'muhammad@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1746436252/uploads/nah33jqdffn53sd4buqw.jpg',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-22T10:15:00Z'
  },
  {
    _id: '6810a172a2f59e2ba953365f',
    first_name: 'Muhammadd',
    last_name: 'Sadullayev',
    email: 'sadullayev@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-23T08:45:00Z'
  },
  {
    _id: '6810b581a2f59e2ba9534d62',
    first_name: 'diyorbek',
    last_name: 'dilmuradovich',
    email: 'diar@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-23T10:00:00Z'
  },
  {
    _id: '6810be4fa2f59e2ba9535b24',
    first_name: 'Nigga',
    last_name: 'dilmuradovich',
    email: 'shit@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-23T10:45:00Z'
  },
  {
    _id: '681111d9a2f59e2ba9558ce1',
    first_name: 'Izzatjon',
    last_name: 'Akbarov',
    email: 'ricky@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1745949490/uploads/syuo21ox44kuxxhzs0ox.png',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-23T15:30:00Z'
  },
  {
    _id: '6811e694025b9c92b4a69bf1',
    first_name: 'olimboy',
    last_name: 'olimovich',
    email: 'as@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-24T08:30:00Z'
  },
  {
    _id: '6811e75c025b9c92b4a69f7a',
    first_name: 'Alibek',
    last_name: 'Tursunboyev',
    email: '1alibek@gmail.com',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1746008129/uploads/efo4kkpnjo3ymzvr7d1z.png',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-24T08:35:00Z'
  },
  {
    _id: '6811e75d025b9c92b4a69f7c',
    first_name: 'Alibeks',
    last_name: 'Tursunboyev',
    email: '1alibek@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-24T08:35:01Z'
  },
  {
    _id: '6812044450e092ed40b99dc2',
    first_name: 'Sevara',
    last_name: "Ne'matullayeva",
    email: 'sevara@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-24T10:45:00Z'
  },
  {
    _id: '6812065750e092ed40b9a285',
    first_name: 'Muhammadd',
    last_name: 'Sadullayev',
    email: 'muhammad@mail.ru',
    image: 'https://res.cloudinary.com/dpavjxpr6/image/upload/v1747221109/uploads/zsouanue7uzpx3di90jv.jpg',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-24T11:00:00Z'
  },
  {
    _id: '6812074c50e092ed40b9a7fd',
    first_name: 'Niggas Day',
    last_name: 'shhh',
    email: 'Beatch@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-24T11:05:00Z'
  },
  {
    _id: '6813265db7d9ef0428715766',
    first_name: 'Alibekkkkkkk',
    last_name: 'Tursunboyevv',
    email: 'alibek01@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-25T09:30:00Z'
  },
  {
    _id: '68134ad6137b6e1e9f774edc',
    first_name: 'new_user',
    last_name: 'user',
    email: 'abzakirovs11@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-25T12:00:00Z'
  },
  {
    _id: '68148d0e79d9357ff9d4012a',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@mail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-26T08:30:00Z'
  },
  {
    _id: '68188aabd575cc01b17ef020',
    first_name: 'Dostonek',
    last_name: 'Zaripov',
    email: 'dostonbek@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-28T10:15:00Z'
  },
  {
    _id: '681b3733b7ac23d079477d1d',
    first_name: 'Shahriyor',
    last_name: 'Malikov',
    email: 'malikovshahriyor9@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-30T08:30:00Z'
  },
  {
    _id: '681b3734b7ac23d079477d1f',
    first_name: 'Shahriyor',
    last_name: 'Malikov',
    email: 'malikovshahriyor9@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-30T08:30:01Z'
  },
  {
    _id: '681b38dfb7ac23d07947893e',
    first_name: 'Davron',
    last_name: 'Raimjonov',
    email: 'raimjonov46@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-30T08:45:00Z'
  },
  {
    _id: '681b3f5eb7ac23d07947a0a5',
    first_name: 'Muham',
    last_name: 'Muhamma',
    email: 'Muhammaeveloper@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-30T09:15:00Z'
  },
  {
    _id: '682178c37ce73eda8f10404b',
    first_name: 'asdf',
    last_name: 'sd',
    email: 'asdfsrdtfyguhijokp@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-02-01T10:30:00Z'
  },
  {
    _id: '6821c3c92e7d38fe7c43ad25',
    first_name: 'Otabek',
    last_name: 'Boltaboyev',
    email: 'qwefgb@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-02-01T15:45:00Z'
  },
  {
    _id: '6821c4042e7d38fe7c43ae22',
    first_name: 'Otabek',
    last_name: 'Boltaboyev',
    email: '213456sdfdgfg@mail.ru',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-02-01T15:46:00Z'
  },
  {
    _id: '682792e9c28a4fa9b4abf163',
    first_name: 'Luffy',
    last_name: 'mokey',
    email: 'd@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-02-03T12:00:00Z'
  },
  {
    _id: '6908fc32c5ff8456bf70d19b',
    first_name: 'Abdurahmon',
    last_name: 'abdurahimov',
    email: 'abdurahmonabdurahimov25@gmail.com',
    image: '',
    phone: '',
    role: 'admin',
    status: 'active',
    createdAt: '2024-05-01T14:20:00Z'
  },
  
];

export const adminApi = {
  async getAdmins(): Promise<Admin[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return JSON.parse(JSON.stringify(mockAdmins));
  },

  async updateAdmin(id: string, data: Partial<Admin>): Promise<Admin> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const index = mockAdmins.findIndex(admin => admin._id === id);
    if (index === -1) throw new Error('Admin not found');
    mockAdmins[index] = { ...mockAdmins[index], ...data };

    return JSON.parse(JSON.stringify(mockAdmins[index]));
  },

  async deleteAdmin(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const index = mockAdmins.findIndex(admin => admin._id === id);
    if (index === -1) throw new Error('Admin not found');

    mockAdmins.splice(index, 1);
  },
};

import { useState, useEffect } from 'react';

export const useAdmins = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAdmins = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await adminApi.getAdmins();
      setAdmins(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  const updateAdmin = async (id: string, data: Partial<Admin>): Promise<boolean> => {
    try {
      const updatedAdmin = await adminApi.updateAdmin(id, data);
      setAdmins(prev => prev.map(a => a._id === id ? updatedAdmin : a));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yangilashda xatolik');
      return false;
    }
  };

  const deleteAdmin = async (id: string): Promise<boolean> => {
    try {
      await adminApi.deleteAdmin(id);
      setAdmins(prev => prev.filter(a => a._id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'O\'chirishda xatolik');
      return false;
    }
  };

  useEffect(() => {
    loadAdmins();
  }, []);

  return {
    admins,
    loading,
    error,
    updateAdmin,
    deleteAdmin,
    refresh: loadAdmins,
  };
};

