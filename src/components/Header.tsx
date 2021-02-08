type Props = {
    edit: () => void
}

const Header:React.FC<Props> = ({edit}) => {
    return (
        <div className="header">
            <div className='title'>
                Seed stats
          </div>
            <div className='edit'>
                <button onClick={edit}>Edit this</button>
            </div>
        </div>
    )
}

export default Header
