const user = {
    name: "Bill Gates",
    imageUrl: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQIK3Ia9w8UrWjaDIwjCf4b1phOf17KmbURPtfgoBJGfWc-tQoKXCKFDOEM_B899BG5fpmOBsygR9b-XwY",
    imageSize: "200px"
}

const products = [
    {id:1, title: "Mango"},
    {id:2, title: "Apple"},
    {id:3, title: "Orange"}
];

const listItems = products.map((product) => 
    <li key={product.id}>
        {product.title}
    </li>
)

function Profile() {
    return(
        <>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} alt="Bill Gates" width={user.imageSize} height={user.imageSize}/>
            <ul>
                {listItems}
            </ul>
       
        </>
    )

}

export default Profile;