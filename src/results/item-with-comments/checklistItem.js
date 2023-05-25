import './style.css'
function ChecklistItem (props) {
    const {comments, item} = props
    const relevantComments = [];

    comments.forEach((obj) => {
        if (obj.itemId === item.itemNumber) {
            relevantComments.push(obj);
        }
    });
    console.log("this is the item: ", item)
    return (
        <li className='main-container' >

            <div className="heading-container">
            <p>item: {item.itemNumber}</p>
            <p className="heading" id={item.response}>{item.description}</p>
            </div>
            <div className='comments-container'>
                {relevantComments.length > 0 ? (
                    relevantComments.map((item) => (
                        <p key={item.id}>{item.comments}</p>
                    ))
                ) : (
                    <p>No comments added</p>
                )}
            </div>
        </li>
    )
}
export default ChecklistItem;