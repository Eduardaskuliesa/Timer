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
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredUser, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        setError("Failed to load users");
        setIsLoading(false);
      }

      const data = (await response.json()) as User[];
      setUsers(data);
      setFilteredUsers(data);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  const handleFiltering = (filter: string) => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLocaleLowerCase().includes(filter) ||
        user.email.toLocaleLowerCase().includes(filter) ||
        user.company.name.toLocaleLowerCase().includes(filter)
    );

    setFilteredUsers(filteredUsers);
  };

  useEffect(() => {
    console.log(selectedUserId);
  }, [selectedUserId]);

  if (users.length === 0 && !isLoading) {
    return <div>No users found...</div>;
  }

  if (error && !isLoading) {
    return <div>Failed to load users</div>;
  }

  return (
    <div>
      <div className="mb-4">
        <UserFilter onFilterChange={handleFiltering}></UserFilter>
      </div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <UserTable users={filteredUser} onUserClick={setSelectedUserId} />
          <UserModal
            userId={selectedUserId}
            onClose={() => setSelectedUserId(null)}
          ></UserModal>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
