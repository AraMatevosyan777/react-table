import React, { useState } from 'react'
import Checkbox from './components/Checkbox'
import Header from './components/Header'
import Input from './components/Input'
import Parameters from './components/Parameters'
import Table from './components/Table'

export type dataType =  {
  col1: boolean
  col2: string
  col3: string
  col4: string
  col5: string
  col6: string
}
export type columnType =  {
  Header: string
  accessor: string
  Cell?: (cellInfo: any) => void
}

const App = () => {
  
  const [data, setState] = useState<dataType[]>([
    {
      col1: false,
      col2: 'Seed service 2',
      col3: '1001',
      col4: '1001',
      col5: '1001',
      col6: '1001',
    },
    {
      col1: false,
      col2: 'Seed service 2',
      col3: '1001',
      col4: '1001',
      col5: '1001',
      col6: '1001',
    },
    {
      col1: false,
      col2: 'Seed service 2',
      col3: '1001',
      col4: '1001',
      col5: '1001',
      col6: '1001',
    },
    {
      col1: false,
      col2: 'Seed service 2',
      col3: '1001',
      col4: '1001',
      col5: '1001',
      col6: '1001',
    },
  ])

  const columns: columnType[] = [
    {
      Header: 'AVIABILITY',
      accessor: 'col1', // accessor is the "key" in the data
      Cell: (cellInfo: any) => <Checkbox checkboxToggle={checkboxToggle} cell={cellInfo.cell} />
    },
    {
      Header: 'LOCATION',
      accessor: 'col2',
    },
    {
      Header: 'PRICE, EUR',
      accessor: 'col3', // accessor is the "key" in the data
      Cell: (cellInfo: any) => <Input onChangeHandler={onChangeHandler} cell={cellInfo.cell} />
    },
    {
      Header: 'PRICE, USD',
      accessor: 'col4',
      Cell: (cellInfo: any) => <Input onChangeHandler={onChangeHandler} cell={cellInfo.cell} />
    },
    {
      Header: 'PRICE, SGD',
      accessor: 'col5', // accessor is the "key" in the data
      Cell: (cellInfo: any) => <Input onChangeHandler={onChangeHandler} cell={cellInfo.cell} />
    },
    {
      Header: 'PRICE, HKD',
      accessor: 'col6',
      Cell: (cellInfo: any) => <Input onChangeHandler={onChangeHandler} cell={cellInfo.cell} />
    },
  ]

  const checkboxToggle = (val: string) => {
    let id = parseInt(val)
    let newData = [...data]
    newData[id].col1 = !newData[id].col1
    setState(newData)
  }

  const onChangeHandler = (rowId: number, colId: string, val: number) => {
    let newData = data.map((el,index) => rowId !== index ? el : {...el, [colId]: val})
    setState(newData)
    console.log(data);
  }

  const edit = () => {
    data.forEach(el => {
      let { col3, col4, col5, col6 } = el
      console.log(col3, col4, col5, col6)

    })
  }

  return (
    <div className='app'>
      <div className="container">
        <Header edit={edit}/>
        <Parameters />
        <Table data={data} columnsProps={columns} />
      </div>
    </div>
  )
}

export default App
