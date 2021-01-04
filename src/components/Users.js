import React, {useState} from 'react'

import List from './List'

export default function Users() {
    const [data, setData] = useState([])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rank, setRank] = useState('');
    
   

    const handleClick = () => {
        setData((data) => [
        ...data, 
        {
            name,
            email,
            rank
        }
        ])
    }

    const handleDelete = (i) => {
        let newData = [...data]
        newData.splice(i, 1)
        setData(newData)
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <h1>User Database CMD</h1>
            <div className="form-wrap">
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Rank:</label>
                    <input type="text" value={rank} onChange={(e) => setRank(e.target.value)} />
                    <button onClick={handleClick}>Add User</button>
                </form>
            </div>
            <List data={data}  handleDelete={handleDelete}/>
        </div>
    )
}
