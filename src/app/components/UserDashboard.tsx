"use client";
import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import UserFilter from "./UserTableFilter";
import UserModal from "./UserModal";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const UserDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isUserFetching, setIsUserFetching] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = (await response.json()) as User[];

      setUsers(data);
      setFilteredUsers(data);
      setIsUserFetching(false);
    };
    fetchUser();
  }, []);

  const handleFilterChange = (filter: string) => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase()) ||
        user.company.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <UserFilter onFilterChange={handleFilterChange} />
      {isUserFetching ? (
        <div>...Loading</div>
      ) : (
        <>
          <UserTable users={filteredUsers} onUserClick={setSelectedUserId} />
          <UserModal
            userId={selectedUserId}
            onClose={() => setSelectedUserId(null)}
          />
        </>
      )}
    </div>
  );
};

export default UserDashboard;
