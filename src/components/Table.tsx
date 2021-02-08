import React from 'react'
import { useTable } from 'react-table'
import { columnType, dataType } from '../App'


type Props = {
  data: dataType[]
  columnsProps: columnType[]
}

const Table: React.FC<Props> = ({data, columnsProps}) => {
  const columns = React.useMemo(() => columnsProps, [data])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<any>({ columns, data })

  
  return (
    <table {...getTableProps()} className='table'>
      <thead className='tableHeader'>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className='tableTh' >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                
                return (
                  <td 
                    {...cell.getCellProps()}
                    className='tableTd'
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
