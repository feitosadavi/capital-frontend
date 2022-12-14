import React from 'react'
import { AppContext } from '../../context/app.context'
import { bind } from '../../Hookes/bind'
import { Select } from '../../types'
import { Select as SelectEl } from '../index'

export const Filters: React.FC<{ select: Select }> = ({ select: { label, options, key } }) => {
  const context = React.useContext(AppContext)
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    const value = event.target.value
    const newFilterValue = { [key]: value === 'Todos' ? '*' : value }
    context.setFilters(prevState => prevState ? ({ ...prevState, ...newFilterValue }) : ({ ...newFilterValue }) as any)
  }

  // // use um event listner dentro do select para realizar as mudanças
  React.useEffect(() => {
    bind({
      parent: 'marca',
      child: 'modelo'
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.filters?.marca])


  return (
    <>
      <SelectEl
        id={key}
        label={label}
        options={options}
        value={context.filters ? (context.filters as any)[key] : '*'}
        onChange={handleChange}
      />
    </>
  )
}
