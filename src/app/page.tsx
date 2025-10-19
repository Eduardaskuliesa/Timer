import UserDashboard from "./components/UserDashboard";

export default async function Home() {
  return (
    <div className="flex font-family-times  min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-900">
      <UserDashboard></UserDashboard>
    </div>
  );
}
