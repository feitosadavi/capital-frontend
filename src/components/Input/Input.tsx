import styled from 'styled-components'

type InputProps = {
  id: string
  label: string
  placeholder: string
  type?: string
  onChange: (event: React.ChangeEvent<any>) => void
  value: any
  error?: string
}
export const Input: React.FC<InputProps> = ({ id, label, placeholder, value, onChange, error, type = 'text' }) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <sub id={`msg-for-${id}`}>
        {error}
      </sub>
    </StyledInput>
  )
}

const StyledInput = styled.div`
  width: 100%;
  margin: .8rem auto .8rem auto;

  label {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    margin-bottom: .3rem;
    color: #8b8b8b;
    font-weight: 500;
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12pt;
    border-style: none;
    border-radius: .5rem;
    padding: 1rem;
  
    :focus {
      outline: none;
      caret-color: ${({ theme }) => theme.colors.white};
    }
  
    ::placeholder {
      color: white;
    }
  
    ::selection {
      color: ${({ theme }) => theme.colors.white}
    }
  }

  sub {
    color: red;
    padding: .3rem;
  }
`