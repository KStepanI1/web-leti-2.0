import {useState} from 'react'

export const useInputField = (type = 'text') => {
 const [value, setValue] = useState('')
 const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value)
 }
 const reset = () => {
  setValue('')
 }

 return {
  type,
  value,
  onChange,
  reset
 }
}