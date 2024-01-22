import {useState} from 'react';

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    let buttonCaption = 'Edit';

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing) {
        playerName = <input type="text" required value={name} />;
        buttonCaption = 'Save'
    }

    return (
        <li>
           <span className="player">
               {playerName}
               <span className="player-symbol">{symbol}</span>
             </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    )
}