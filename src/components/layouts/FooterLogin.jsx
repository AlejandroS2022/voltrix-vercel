const FooterLogin = ({content, redirectText, src}) => {
  return (
    <>
    <div className="footer-content">
        <hr />
        <p>{content}&nbsp;<a href={src} className='color-link'>{redirectText}</a></p>
    </div>
    </>
  );
};

export default FooterLogin;