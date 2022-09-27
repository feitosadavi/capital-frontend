import styled from 'styled-components'

type ButtonProps = {
  label: string
  type?: "button" | "reset" | "submit"
  onClick?: (e?: any) => void
  background?: 'outline'
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
  }
`

const StyledButton = styled.button`
  margin: 1rem auto 1rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 12pt;
  border-radius: .5rem;
  width: 100%;

  .outline {
    color: pink;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  :focus {
    color: white;
  }
`