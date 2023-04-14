import React from 'react'

export const PostButtons = ({ onDeletePost, id }) => {
	return <button onClick={() => onDeletePost(id)}>Delete</button>
}
