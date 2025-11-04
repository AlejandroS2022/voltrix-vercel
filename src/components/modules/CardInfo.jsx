const CardInfo = ({title, src, content }) => {
  return (
    <>
        <div className="card-info">
            <img src={src} />
            <div className="card-info__content">
                <h3>{title}</h3>
                <h1>{content}</h1>
            </div>
        </div>
    </>
  );
};

export default CardInfo;