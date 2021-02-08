import React, { ChangeEvent, useState } from 'react'

type Props = {
    cell: any
    onChangeHandler: (rowId: number, colId: string, value: number) => void
}

const Input: React.FC<Props> = ({ cell, onChangeHandler }) => {
    const [value, setValue] = useState(cell.value)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (value === value) {
            setValue(value)
        }
    }

    const onMouseBlur = () => {
        let rowId = parseInt(cell.row.id)
        onChangeHandler(rowId, cell.column.id, value)
    }

    return (
        <input disabled={!cell.row.values.col1}
            type="text" onChange={onChange}
            value={value} className='input'
            onBlur={onMouseBlur}
        />
    )
}

export default Input
