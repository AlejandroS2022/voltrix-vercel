import  { Avatar, Chip } from "@mui/material";

const CardIndice = ({title, src, content, status, statusPercentage }) => {
  return (
    <>
        <div className="card-info-user">
            <div className="card-info-user__content">
                <div className="card-info-user__content-avatar">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }}/>
                    <div className="card-info__content">
                        <h3 style={{padding: '0px', margin: '0px', fontWeight: '400', color: 'white'}}>{title}</h3>
                        <h5 style={{padding: '0px'}}>{content}</h5>
                    </div>
                </div>
            </div>
            <div>
                <h5 style={{color: 'white', fontWeight: '400'}}>50,357.15 JPY</h5>
                <h5 className={status}>{statusPercentage}</h5>
            </div>
        </div>
    </>
  );
};

export default CardIndice;