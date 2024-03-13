import React, { useState } from 'react'

interface Props {
    close: () => void;
}

const EditUser = ({close}: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    const handleClickSave = () => {
        //TODO save and close profile
        alert (`Save and close profile: `);
        close();
    }

    

  return (
    <>
<label>
                FirstName:
                {/* onChange={e => setLogin(e.target.value.trim())} - создаем контролируемый компонент */}
                <input value={firstName} onChange={e => setFirstName(e.target.value.trim())} type="text" />
            </label>
            <label>
                LastName:
                {/* onChange={e => setLogin(e.target.value.trim())} - создаем контролируемый компонент */}
                <input value={lastName} onChange={e => setLastName(e.target.value.trim())} type="text" />
            </label>
            <button onClick={handleClickClear}>Clear</button>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without saving</button>


    </>
  )
}

export default EditUser