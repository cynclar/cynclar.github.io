import styled from "styled-components";

const StyledMenu = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 1em;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  
  background-color: rgba(156, 173, 206, 0.5);
  backdrop-filter: blur(10px);
  z-index: 9;
  }

  li {
      padding: 2em 0;

      a {
          color: white;
          text-decoration: none;
          font-size: 5rem;
          font-weight: 200;
          transition: all 300ms ease;

          &:hover {
              color: #fcf4dd;
          }
      }
  }
`;

const NavLinks = ({ open, toggle }) => {
  return (
    <StyledMenu open={open}>
      <li>
        <a href="#about" onClick={toggle}>
          about
        </a>
      </li>
      <li>
        <a
          href={process.env.PUBLIC_URL + "/CV_Cynthia_Clarissa.pdf"}
          download="Cynthia Clarissa CV.pdf"
        >
          resume
        </a>
      </li>
    </StyledMenu>
  );
};

export default NavLinks;
