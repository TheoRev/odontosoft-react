import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function BarMenu(props) {
  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand href="#">OdontoSOFT</NavbarBrand>
        <NavbarToggler onClick={props.onClick} />
        <Collapse isOpen={props.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Pacientes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Tratamiento</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Control</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Odontograma</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>|</NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Usuario
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default BarMenu;
