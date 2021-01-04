import React from 'react'

export default function List({data, handleDelete}) {

    const dataList = data.map((item, i) => {
        return (
            <div className="cards" key={i}>
                <span>Name</span>
                <div>{item.name}</div>
                <span>Email</span>
                <div>{item.email}</div>
                <span>Rank</span>
                <div>{item.rank}</div>
                <button onClick={() => handleDelete(i)}>Delete User</button>
            </div>
        )
    })

    return (
        <div className="users">
            {dataList}
        </div>
    )
}
