import { Avatar, Chip } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import Stack from '@mui/material/Stack';


const CardInfoUser = ({title, src, content }) => {
  return (
    <>
        <div className="card-info-user">
            <div className="card-info-user__content">
                <div className="card-info-user__content-avatar">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }}/>
                    <div className="card-info__content">
                        <h2>{title}</h2>
                        <h4>{content}</h4>
                    </div>
                </div>
                <Stack direction="row"><Chip label="Verified Account" className="chip-verify" icon={<DoneIcon />}/></Stack>
            </div>
            <h5>Your account number is used to identify you as a client and is also linked to all internal trading platform services.</h5>
        </div>
    </>
  );
};

export default CardInfoUser;