import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../slices/usersApiSlice";
import { FcBiohazard } from "react-icons/fc";
import { TiUserDelete } from "react-icons/ti";
import { VscEdit, VscTerminalLinux } from "react-icons/vsc";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { toast } from "react-toastify";

const UserListScreen = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();

  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure 🤔")) {
      try {
        await deleteUser(id);
        toast.success("User Deleted");
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <>
      <h1>Users</h1>
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>

                <td>
                  {user.isAdmin ? (
                    <VscTerminalLinux style={{ color: "green" }} />
                  ) : (
                    <FcBiohazard style={{ color: "red" }} />
                  )}
                </td>

                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button className="btn-sm m-2" variant="info">
                      <VscEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <TiUserDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <VscTerminalLinux
                  style={{ color: "green", fontSize: "24px" }}
                />{" "}
                Admin
              </td>

              <td>
                <FcBiohazard style={{ color: "red", fontSize: "24px" }} /> = Not
                Admin
              </td>
            </tr>
          </tfoot>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
