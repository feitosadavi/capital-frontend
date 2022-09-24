import styled from 'styled-components'

type TextareaProps = {
  id: string
  label: string
  placeholder: string
  onChange: (event: React.ChangeEvent<any>) => void
  value: any
  error?: string
}
export const Textarea: React.FC<TextareaProps> = ({ id, label, placeholder, value, onChange, error }) => {
  return (
    <StyledTextarea>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <sub id={`msg-for-${id}`}>
        {error}
      </sub>
    </StyledTextarea>
  )
}

const StyledTextarea = styled.div`
  width: 100%;
  margin: .8rem auto .8rem auto;
  
  textarea {
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
  }

  sub {
    color: red;
    padding: .3rem;
  }
`