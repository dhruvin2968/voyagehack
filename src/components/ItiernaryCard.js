import { useState } from "react";

export const PostCard = ({ key, post }) => {
  const {title, itinerary } = post;

  const [liked, setLiked] = useState(false);
  const [smile, setSmile] = useState(false);

  return (
    <div className="card">
      {itinerary && (
        <div>
          <h1 className="text-2xl">{title}</h1>
          {Object.entries(itinerary).map(([day, details]) => (
            <div key={day} className="day-card">
              <h3>{day}: {details.title}</h3>
              <ul>
                {details.activities.map((activity, index) => (
                  <li key={index}>
                    <strong>{activity.time}:</strong> {activity.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


//const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    // const [dropdown, setDropdown] = useState(false);
    // async function handleDelete(){
    //   const document = doc(db, "posts", id);
    //   await deleteDoc(document);
    //   setToggle(!toggle);
    // }

       {/* <p className="control">      
               
            <span className="comment">
              <button  className=" ico"><i className="bi bi-chat-dots"></i></button>
              
              
              { dropdown &&  <Comments  post={post} setDropdown={setDropdown} />}
              <button
  onClick={() => setLiked(!liked)}
  className="ico transform transition duration-200 ease-in-out"
  style={{ transform: liked ? 'scale(1.2)' : 'scale(1)' }}
>
  {!liked ? (
    <i className="bi bi-heart "></i>
  ) : (
    <i className="bi bi-heart-fill text-red-600"></i>
  )}
</button>

              

<button
  onClick={() => setSmile(!smile)}
  className="ico transform transition duration-200 ease-in-out"
  style={{ transform: smile ? 'scale(1.2)' : 'scale(1)' }}
>
  {!smile ? (
    <i className="bi bi-emoji-laughing"></i>
  ) : (
    <i className="bi bi-emoji-laughing-fill text-blue-800"></i>
  )}
</button>





              
            </span>
            <span className="author">{author.name}</span>
            { isAuth && ((author.id === auth.currentUser.uid)||(auth.currentUser.uid==="r7eGfMftf4Uo13jhJEvyPhiOQCc2"))&& <span onClick={handleDelete} className="delete"><i className="bi bi-trash3"></i>
            </span> }
            
        </p> */}