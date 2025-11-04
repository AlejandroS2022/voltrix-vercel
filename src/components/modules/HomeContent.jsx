import CardIndice from "./CardIndice";
import CardInfo from "./CardInfo";
import CardInfoUser from "./CardInfoUser";

const HomeContent = () => {
  return (
    <>
    <div className="home-content">
      <div className="home-content__left">
        <CardInfoUser title="maiker" content='Account: 4453728992'></CardInfoUser>
        <CardInfo title='balance' src='images/balance.svg' content='$623,098.17'></CardInfo>
        <CardInfo title='founds' src='images/founds.svg' content='$122,912.50'></CardInfo>
        <CardInfo title='credit' src='images/credit.svg' content='$200,098.17'></CardInfo>
        <CardInfo title='SSA' src='images/ssa.svg' content='$580,098.17'></CardInfo>
      </div>
      <div className="home-content__right">
        <div className="home-content__right-map">
          <h2>Heatmap (% / day)</h2>
          <img src="images/Rectangle.png" />
        </div>
        <div className="home-content__right-indices">
          <h2>World indices</h2>
          <div className="home-content__right-indices-cards">
            <CardIndice title='Nl225' src='images/founds.svg' content='Japan 225 Index' status="negative-percentage" statusPercentage="-0.58%"></CardIndice>
            <CardIndice title='Nl225' src='images/founds.svg' content='Japan 225 Index' status="positive-percentage" statusPercentage="0.58%"></CardIndice>
            <CardIndice title='Nl225' src='images/founds.svg' content='Japan 225 Index' status="negative-percentage" statusPercentage="-0.58%"></CardIndice>
          </div>
        </div> 
      </div>
    </div>
    </>
  );
};

export default HomeContent;