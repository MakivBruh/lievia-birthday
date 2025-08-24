export interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt?: number; // epoch ms from server
}
