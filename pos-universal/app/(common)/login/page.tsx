"use client";

import React, { useActionState } from "react";
import resource from "@/locales/en.json";
import { userApi } from "@/lib/api/users";


interface ActionState {
  success: boolean | null;
  message: string;
}

export default function LoginPage() {

  async function loginAction(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;



    if (!username || !password) {
      return { success: false, message: "Please enter a valid username and password." };
    }
 
    try {
      const response = await userApi.postLogin(username, password);
      if (response) {
        return { success: true, message: "Login successful!" };
      }
      return { success: false, message: "Invalid username or password." };
    } catch (error) {
      return { success: false, message: "An error occurred during login." };
    }
  }
  const [state, formAction, isPending] = useActionState(loginAction, { message: "", success: null });

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        {resource.login.title}
      </h2>
      <form action={formAction}>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="username"
          >
            {resource.login.usernameLabel}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-white text-base"
            id="username"
            name="username"
            type="text"
            placeholder={resource.login.usernamePlaceholder}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="password"
          >
            {resource.login.passwordLabel}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-white text-base"
            id="password"
            name="password"
            type="password"
            placeholder={resource.login.passwordPlaceholder}
            required
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-150 ease-in-out"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Signing in..." : resource.login.signInButton}
          </button>

          {state.message && (
            <p
              className={`text-sm text-center ${
                state.success ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              }`}
            >
              {state.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
