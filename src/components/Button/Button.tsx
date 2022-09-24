import styled from 'styled-components'

type ButtonProps = {
  label: string
  type?: "button" | "reset" | "submit"
}

export const Button: React.FC<ButtonProps> = ({ label, type = 'button' }) => {
  return <StyledButton type={type}>{label}</StyledButton>
}

const StyledButton = styled.button`
  margin: 1rem auto 1rem auto;
  padding: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 12pt;
  border-radius: .5rem;

  :focus {
    color: white;
  }
`