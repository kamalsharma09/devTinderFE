const UserCard = ({feed}) => {
  const {firstName, lastName, about, photoURL, age, gender} = feed;
    return (
        <>
            <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoURL}
      alt="user profile pic" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
    {age && gender && <p>{age}, {gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-around mt-5">
      <button className="btn btn-primary">Ignored</button>
      <button className="btn text-white bg-green-700">Intrested</button>
    </div>
  </div>
</div>
        </>
    );
}
export default UserCard;