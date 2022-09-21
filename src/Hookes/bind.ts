type BindProps = {
  parent: string
  child: string
}

interface GetElByIdOutput extends HTMLElement {
  value: string | number | boolean
}

const getElById = (id: string): GetElByIdOutput => {
  const el = document.getElementById(id) as GetElByIdOutput
  if (el) {
    return el
  } else {
    throw new Error(`select with >${id}< id doesnt exists!`)
  }
}

export const bind = ({ parent, child }: BindProps) => {
  try {
    const parentSelectValue = getElById(parent).value

    const childSelect = getElById(child)

    if (parentSelectValue === '*') {
      childSelect.setAttribute('disabled', 'disabled')
    } else {
      childSelect.removeAttribute('disabled')
    }
  } catch (error) {
    console.error(error);
  }
}