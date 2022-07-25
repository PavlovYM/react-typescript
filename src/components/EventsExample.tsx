import React, { FC, useState } from 'react'

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  }
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler}/>
      <button onClick={clickHandler}>Button</button>
    </div>
  )
}

export default EventsExample