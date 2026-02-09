"use client";

import React, { useActionState } from "react";
import resource from "@/locales/en.json";
import { userApi } from "@/lib/api/users";
import Link from "next/link";

interface ActionState {
  success: boolean | null;
  message: string;
}

export default function LoginPage() {
  async function loginAction(
    prevState: ActionState,
    formData: FormData,
  ): Promise<ActionState> {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      return {
        success: false,
        message: resource.login.invalidCredentials,
      };
    }

    try {
      const response = await userApi.postLogin(username, password);
      if (response) {
        return { success: true, message: resource.login.successMessage };
      }
      return { success: false, message: resource.login.invalidCredentials };
    } catch {
      return { success: false, message: resource.common.error };
    }
  }
  const [state, formAction, isPending] = useActionState(loginAction, {
    message: "",
    success: null,
  });

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
            {resource.common.usernameLabel}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-white text-base"
            id="username"
            name="username"
            type="text"
            placeholder={resource.common.usernamePlaceholder}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="password"
          >
            {resource.common.passwordLabel}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-white text-base"
            id="password"
            name="password"
            type="password"
            placeholder={resource.common.passwordPlaceholder}
            required
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-150 ease-in-out"
            type="submit"
            disabled={isPending}
          >
            {`${resource.login.submit}${isPending ? "..." : ""}`}
          </button>

          {state.message && (
            <p
              className={`text-sm text-center ${state.success
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
                }`}
            >
              {state.message}
            </p>
          )}
        </div>
        <div className="mt-1 pt-1 border-t border-gray-200 dark:border-gray-700 text-center">
          <Link
            href="/register"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold text-sm transition-colors"
          >
            Create a new account
          </Link>
        </div>
      </form>
    </div>
  );
}