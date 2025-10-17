import React from "react";
import { User } from "./UserDashboard";

interface UserTableProps {
  users: User[];
  onUserClick: (userId: number) => void;
}

const UserTable = ({ users, onUserClick }: UserTableProps) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="text-left p-3 border border-gray-300">Name</th>
          <th className="text-left p-3 border border-gray-300">Email</th>
          <th className="text-left p-3 border border-gray-300">Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={user.id}
            onClick={() => onUserClick(user.id)}
            className={`border border-gray-300 cursor-pointer ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            } hover:bg-blue-100`}
          >
            <td className="p-3 border border-gray-300">{user.name}</td>
            <td className="p-3 border border-gray-300">{user.email}</td>
            <td className="p-3 border border-gray-300">{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
