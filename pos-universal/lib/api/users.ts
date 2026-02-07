import db from "@/lib/db/dexiedb";
import type { User } from "@/types/user";

export class userApi {

  static async getAllUsers() {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return await response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  static async get(id: string) {
    try {
      const response = await fetch(`/api/users/${id}`);
      if (!response.ok) throw new Error('User not found');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  }

  //omit id 
  static async post(userData: Partial<User>) {
    return db.users.add(userData as User);
  }

} 