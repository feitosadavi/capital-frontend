import { CMS } from '../host'
import { Select } from '../types'
import { request } from './request'


export const fetchSelects = async (params?: string): Promise<Select[]> => {
  try {
    const query = params ? `?${params}` : ''
    const _selects = await request<Select[]>(`${CMS}/api/filters${query}`)

    const ano = _selects.filter(_select => _select.key === 'ano')[0]
    const anos = { ...ano, key: 'anos' }

    _selects.splice(_selects.indexOf(ano), 1)
    _selects.push(anos)
    return _selects
  } catch (error) {
    console.log(error);
    return []
  }
}