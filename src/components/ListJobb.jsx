import SingleCard from "./SingleCard";

const ListJobb = ({ jobbs }) => (
  <div>
    {jobbs.map((jobb) => (
      <SingleCard key={jobb._id} jobb={jobb} />
    ))}
  </div>
);

export default ListJobb;
