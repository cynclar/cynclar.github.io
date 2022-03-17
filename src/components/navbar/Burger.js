import styled from "styled-components";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;

  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  &:hover {
    div:first-child,
    div:nth-child(3) {
      transform: ${({ open }) => (open ? "" : "scaleX(1)")};
    }
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "white" : "black")};
    transition: all 300ms linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? "rotate(45deg)" : "rotate(0) scaleX(0.5)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg)" : "rotate(0) scaleX(0.7)"};
    }
  }
`;

const Burger = ({ open, toggle }) => {
  return (
    <StyledBurger open={open} onClick={toggle}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
