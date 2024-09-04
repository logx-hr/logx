import ContentCard from "~/components/Ui/Cards/ContentCard";
import CircleText1 from "~/components/Ui/Components/CircleText";
const About = () => {
  return (
    <div className="about-one padding" id="about">
      <div className="about-one__big-title">transport </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="about-one__img clearfix">

              <div className="inner clearfix">
                <img
                  className="float-bob-y"
                  src="/img/resource/truck_crop.png"
                  alt=""
                />
              </div>

            </div>
          </div>

          <div className="col-xl-7">
            <div className="about-one__content">
              <div className="about-one__content-top">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5>
                      <span className="icon-right-arrow-1"></span> O nama
                    </h5>
                  </div>
                  <h2>
                    Digitalizirana i Provjerena <br />
                    Logistička tvrtka
                  </h2>
                </div>

                <div className="text">
                  <p>
                    Digitalno napredna logistička tvrtka koja pruža brza, precizna i sigurna rješenja za prijevoz.
                    Koristimo najnovije tehnologije za optimizaciju lanca opskrbe i automatizaciju procesa.
                    Naša pouzdanost i inovativnost osiguravaju učinkovitost i transparentnost u svakom koraku vašeg logističkog putovanja.
                  </p>
                </div>
              </div>

              <div className="about-one__content-features">
                <ul>
                  <li
                    className="wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <ContentCard image="/img/icon/about/worldwide-delivery.png" title="Brza dostava unutar cijele Europe" description="Pošaljite Vaše proizvode ili pakete na bilo koju lokaciju diljem Europe." />
                  </li>

                  <li
                    className="wow fadeInRight"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <ContentCard image="/img/icon/about/secure-delivery.png" title="Brza i sigurna dostava" description="Uz 100% uspješnosti dostave robe i paketa,
                    nudimo express pošiljke unutar cijele EU u roku od 24 sata!" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;