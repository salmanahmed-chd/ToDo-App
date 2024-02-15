import React from 'react'
import CompletedTaskItem from './CompletedTaskItem'

const ShowCompletedTasks = ({ completed, setCompleted }) => {
    return (
        <div className="my-10 mx-3">
            {
                completed.map((item, index) => {
                    return (
                        <CompletedTaskItem key={index} item={item} items={completed} index={index} setItems={setCompleted} />
                    )
                })
            }
        </div>
    )
}

export default ShowCompletedTasks