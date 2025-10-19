import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { User } from "./UserDashboard";

interface UserModalProps {
  userId: number | null;
  onClose: () => void;
}

const UserModal = ({ userId, onClose }: UserModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (userId) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, userId]);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!response.ok) {
        alert("Failed to fetch user");
      }
      const data = (await response.json()) as User;

      setUser(data);
      setIsLoading(false);
    };

    fetchUser();
  }, [userId]);

  if (!userId) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : user ? (
          <>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-2">
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
              <p>
                <strong>Address:</strong> {user.address.street},{" "}
                {user.address.city}
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>,
    document.body
  );
};

export default UserModal;
