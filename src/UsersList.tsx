import "./UsersList.css"


export const UsersList = () => {

    return (
        <div className='list'>
            <div className={'input'}>
                <input type={"search"}/>
                <button>Reset</button>
            </div>
        </div>
    )
}