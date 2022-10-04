import styled from 'styled-components'

type ButtonProps = {
  label: string
  type?: "button" | "reset" | "submit"
  onClick?: (e?: any) => void
  background?: 'outline' | 'active'
}

export const Button: React.FC<ButtonProps> = ({ label, type = 'button', onClick, background }) => {
  return (
    <StyledWrapper >
      <StyledButton className={background} onClick={onClick} type={type}>{label}</StyledButton>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100%;

  .outline {
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 5px 5px ${({ theme }) => theme.colors.primary};
  }

  .active {
    box-shadow: 5px 5px ${({ theme }) => theme.colors.white};
  }
`

const StyledButton = styled.button`
  margin: 1rem auto 1rem auto;
  padding: 1.5rem .3rem 1.5rem .3rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  transition: .1s;
  font-size: 3vw; // dont remove

  border-radius: .5rem;
  width: 100%;

  @media screen and (min-width: 730px) {
    font-size: 13pt;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3.2vw;
  }

  :hover {
    transition: .1s;
    color: white;
    box-shadow: 5px 5px ${({ theme }) => theme.colors.white};
  }
`