import React, { useState, useEffect } from "react";

interface UserFilterProps {
  onFilterChange: (filter: string) => void;
}

const UserFilter = ({ onFilterChange }: UserFilterProps) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFilterChange(filter);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filter, onFilterChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value as string);
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search users by name, email, or company..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default UserFilter;
