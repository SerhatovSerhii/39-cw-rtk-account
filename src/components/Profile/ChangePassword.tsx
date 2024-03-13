import React, { useState } from 'react'
interface Props {
    close: () => void;
}

const ChangePassword = ({ close }: Props) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setRepeatPassword('');

    }

    const handleClickSave = () => {
        //TODO save and close profile
        if (newPassword === repeatPassword) {
            alert(`Save and close password: `);
        } else {
            alert(`Passwords don't match!`);
        }
        close();
    }



return (
    <div>
        <label  >
            Old password:

            <input type="password" onChange={e => setOldPassword(e.target.value.trim())}
                value={oldPassword} />
        </label>
        <label >
            New password:

            <input type="password" onChange={e => setNewPassword(e.target.value.trim())}
                value={newPassword} />
        </label>
        <label >
            Repeat new password:
            <input type="password" onChange={e => setRepeatPassword(e.target.value.trim())}
                value={repeatPassword} />
        </label>
        <button onClick={handleClickClear}>Clear</button>
        <button onClick={handleClickSave}>Save and Close</button>
        <button onClick={close}>Close without saving</button>
    </div>
)
}

export default ChangePassword