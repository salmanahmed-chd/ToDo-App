import React from 'react';

const CompletedTaskItem = ({ item, items, index, setItems }) => {
    const { title, description } = item;

    const handleRemoveItem = () => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    }

    return (
        <div className="bg-gray-100 px-3 py-2 rounded-md shadow-md mt-3 flex justify-between items-center">
            <div className="">
                <h2 className='mb-2 font-bold'>{title[0].toUpperCase()}{title.substring(1)}</h2>
                <h3 className='ml-2'>{description ? description[0].toUpperCase() + description.substring(1) : ''}</h3>
            </div>
            <div className="mr-4">
                <button className='mr-2' onClick={handleRemoveItem}><i className="ri-delete-bin-5-line text-2xl hover:text-red-500"></i></button>
            </div>
        </div>
    );
};

export default CompletedTaskItem;
