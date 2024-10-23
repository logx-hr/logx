import Link from "next/link";

const ErrorSection = () => {
  return (
    <section className="error-page padding">
      <div
        className="error-page__bg"
        style={{
          backgroundImage: "url(/img/background/error-page-bg.jpg)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="error-page__wrapper text-center">
              <div className="error-page__content">
                <div className="shape1">
                  <img src="/img/shape/error-page-shape1.png" alt="Objekt" />
                </div>
                <h2>
                  4
                  <span>
                    <img src="/img/shape/error-page-shape2.png" alt="Objekt" />
                  </span>
                  4
                </h2>
                <h3>Ups! Stranica nije pronađena</h3>
                <p>
                  Stranica koju ste tražili  ne postoji ili je u izradi!
                </p>
                <div className="btn-box">
                  <Link className="thm-btn" href="/">
                    <span className="txt">Natrag na početnu</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
