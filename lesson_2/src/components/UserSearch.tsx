import React from "react";

type UserSearchProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserSearch: React.FC<UserSearchProps> = ({value, onChange}) => {
  return(
    <div className="userSearch">
      <h1>User Search</h1>
      <input className="input" value={value} onChange={onChange} />
    </div>
  )
}

export default UserSearch