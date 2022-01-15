import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserGroups } from "../../store/groups";
import { loadGroupChats } from "../../store/chats";
import "./chats.css";
function Chats() {
  const dispatch = useDispatch();

  const id = useSelector((state) => {
    return state?.userSession?.user?.id;
  });

  const [showChatTitle, setShowChatTitle] = useState(null);
  const [chatToShow, setChatToShow] = useState(null);

  function setupGroups(uId) {
    dispatch(getAllUserGroups(uId));
  }

  const handleChatsFunc = (groupId) => {
    console.log("SETTING UP" + id);
    dispatch(loadGroupChats(groupId));
  };

  useEffect(() => {
    console.log("ASDFASDFASDFASDFASDFASDFASDFASDFDASFASDF");
    setupGroups(id);
  }, [id]);

  const userGroups = useSelector((state) => {
    return state?.groups?.groups;
  });

  return (
    <div className="chatsContainer">
      <div className="titleImageCOntainer">
        <div className="groupsImages">
          {userGroups?.map((group) => (
            <div className="chatHeaderContainer">
              <div
                onMouseEnter={(e) => setShowChatTitle(group.Chat_group.id)}
                onMouseLeave={(e) => setShowChatTitle(null)}
                onClick={(e) => handleChatsFunc(group?.Chat_group?.id)}
                className="chatImage"
                style={{
                  backgroundImage: `url("${group.Chat_group?.picture}")`,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="groupsTitles">
          {userGroups?.map((group) => (
            <div className="chatTitleContainer">
              {showChatTitle === group.Chat_group.id && (
                <div className="groupTitle">{group.Chat_group.title}</div>
              )}
            </div>
          ))}
        </div>
        <div className="chatsDiv">{chatToShow && <div>{chatToShow}</div>}</div>
      </div>
    </div>
  );
}
export default Chats;
