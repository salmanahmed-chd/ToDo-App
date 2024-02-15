import React from 'react'
import TaskItem from './TaskItem'

const ShowTasks = ({ items, setItems, completed, setCompleted }) => {
    return (
        <div className="my-10 mx-3">
            {
                items.map((item, index) => {
                    return (
                        <TaskItem key={index} item={item} items={items} index={index} setItems={setItems} completed={completed} setCompleted={setCompleted} />
                    )
                })
            }
        </div>
    )
}

export default ShowTasks