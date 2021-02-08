import React from 'react'

type Props = {
    cell: any
    checkboxToggle: (id: string) => void
}

const Checkbox: React.FC<Props> = ({ cell, checkboxToggle }) => {

    return (
        <>
            <input onChange={() => checkboxToggle(cell.row.id)} type="checkbox" checked={cell.row.original.col1} />
            <span style={{ padding: '5px 35px' }}>
                {cell.value ? 'Yes' : 'No'}
            </span>
        </>
    )
}

export default Checkbox
