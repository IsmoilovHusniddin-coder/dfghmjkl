export interface Student {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  group: string;
  status: 'active' | 'inactive';
  createdAt: string;
}