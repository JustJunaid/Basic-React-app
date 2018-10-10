import React from 'react'

export default ({ members }) => {

    const Members = members.map(member => {
        return (
            <ul key={member.id}>
                <li  className="current">{member.name}: {member.age}</li>
            </ul>
        )
    })

    return (
        <div>
            {Members}
        </div>
    )
}
