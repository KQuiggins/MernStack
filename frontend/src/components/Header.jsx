import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaUserSecret } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import "../assets/styles/Header.css";

const Header = () => {

  const { cartItems } = useSelector((state) => state.cart);
  console.log('cartItems', cartItems)

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/" className="brand">
            <Navbar.Brand>
              <FaUserSecret className="mx-2" />
              Xsploit
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart" className="sign-in-cart">
                <Nav.Link>
                  <FaShoppingCart />
                  <span>Cart</span>
                  {
                    cartItems.length > 0 && (
                      <Badge pill bg="success" className="mx-2">
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </Badge>)
                  }
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login" className="sign-in">
                <Nav.Link>
                  <FaUser/>
                  <span>Sign In</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
