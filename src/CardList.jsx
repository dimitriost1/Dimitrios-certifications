import SingleCard from "./SingleCard";

const CardList = ({ certificates }) => {
  return (
    <>
      {certificates.map((cert) => (
        <SingleCard
          key={cert.id}
          cert_image={cert.cert_image}
          course={cert.course}
          link={cert.cert_link}
        />
      ))}
    </>
  );
};

export default CardList;
