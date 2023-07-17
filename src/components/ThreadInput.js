

const ThreadInput = ({user, text, setText, postThread}) => {
  return (
    <>
      <p>{user.handle}</p>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="primary" onClick={postThread}>Post</button>   
    </>
  )
}

export default ThreadInput
