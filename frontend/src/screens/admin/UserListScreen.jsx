import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useGetUsersQuery } from "../../slices/usersApiSlice";
import { FcBiohazard } from "react-icons/fc";
import { TiUserDelete } from "react-icons/ti";
import { VscEdit, VscTerminalLinux } from "react-icons/vsc";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const UserListScreen = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();
  console.log(users);

  const deleteHandler = async (id) => {
    console.log("deleteHandler");
  };

  return (
    <>
      <h1>Users</h1>
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
                  <LinkContainer to={`admin/user/${user._id}/edit`}>
                    <Button className="btn-sm mx-2" variant="info">
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
            <td>
              <FcBiohazard style={{ color: "red", fontSize: "24px" }} /> = Not
              Admin
            </td>
            <td>
              <VscTerminalLinux style={{ color: "green", fontSize: "24px" }} />{" "}
              Admin
            </td>
          </tfoot>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
