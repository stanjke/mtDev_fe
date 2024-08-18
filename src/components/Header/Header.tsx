import HeaderNavigation from "./components/HeaderNavigation";
import SearchForm from "../SearchForm/SearchForm";
import Container from "../Container/Container";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <HeaderNavigation />
        <SearchForm />
      </Container>
    </header>
  );
}

export default Header;
