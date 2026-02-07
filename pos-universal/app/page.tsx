'use client';
import { useEffect, useState } from 'react';

import { userApi } from "@/lib/api";

export default function Home() {

  useEffect(() => {

    userApi.post({
      guid: "12345678-1234-1234-1234-123456789012",
      name: "abc",
      email: "abc@example.com",
      username: "abc123",
      password: "@S@",
      isActive: true,
      createdDate: "2023-01-01T00:00:00Z",
      createdBy: 1,
      updatedDate: "2023-01-01T00:00:00Z",
      updatedBy: 1,
      deletedDate: "",
      deletedBy: 0
    }).then(() => {
      console.log("User added successfully!");
    }).catch((error) => {
      console.error("Error adding user:", error);
    });


  }, []);

  return (
    <div className="p-4">
      <h2>ABC</h2>
    </div>
  );
} 