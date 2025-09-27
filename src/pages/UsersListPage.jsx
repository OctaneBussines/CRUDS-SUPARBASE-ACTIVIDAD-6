import { useUsers } from '../hooks/useUsers';
import UserList from '../components/UserList';

const UsersListPage = () => {
  const { users, loading, deleteUser } = useUsers();

  return (
    <div>
      <UserList users={users} loading={loading} onDelete={deleteUser} />
    </div>
  );
};

export default UsersListPage;
