import React from "react";
import { User } from "./UserDashboard";

interface UserTableProps {
  users: User[];
  onUserClick: (userId: number | null) => void;
}

const UserTable = ({ users, onUserClick }: UserTableProps) => {
  return (
    <table>
      <thead>
        <tr className="bg-blue-500 ">
          <th className="p-2 text-start text-gray-50">Name</th>
          <th className="p-2 text-start text-gray-50">Email</th>
          <th className="p-2 text-start text-gray-50">Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            onClick={() => onUserClick(user.id)}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            } border hover:bg-blue-100 transition-colors cursor-pointer`}
            key={user.id}
          >
            <td className="p-2 ">{user.name}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
