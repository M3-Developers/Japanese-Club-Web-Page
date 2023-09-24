import fontsStyle from '../../Assets/Style/Uni/fonts.css';
import midiaStyle from '../../Assets/Style/Page6/midias.css';
import haruChibi from '../../Assets/img/haruChibi.png';
import ytIcon from '../../Assets/img/yt_icon.svg';
import ytQRCode from '../../Assets/img/qrcode.svg';

function MidiaMain() {
  return (
    <div className="menu">
      {/* Espaco Resumo */}

      <div className="midiaContainer">
        <h3 className="MidiasTitle">Instagram</h3>
        <div className="instaConteiner">
          <img src={haruChibi} className="haruChibi" /> {/* Img Haru */}
          <div className="instaTxt">
            <p className="instaName">@clubenihongo_salotti</p>
            <p className="instaTitle">Siga a gente em nossas redes sociais</p>
            <div className="instaBotton">
              <a
                href="https://instagram.com/clubenihongo_salotti?igshid=OGQ5ZDc2ODk2ZA==F"
                className="instaBottonTxt"
              >
                quero conhecer
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="midiaContainer">
        <h3 className="MidiasTitle">YouTube</h3>
        <div className="youtubeConteiner">
          <div className="leftContent">
            <p className="youtubeTitle">Clube Nihongo Salotti</p>
            <p className="youtubeDescription">
              No canal do Clube você pode conferir algumas atividades, dinâmicas
              e vídeo aulas sobre a Língua Japonesa
            </p>
            <img src={ytIcon} className="ytIcon" /> {/* Youtube Icone */}
          </div>
          <div className="rightContent">
            <img src={ytQRCode} className="ytQRCode" /> {/* Youtube QR Code */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidiaMain;
