import React from 'react'

const About = ({aboutData,id}) => {
    const {AboutTitle,AboutMe1Sec,AboutMe2Sec,ButtonName,ButtonIconFontAwesome,ButtonSite} = aboutData;
    return (
        <section className="page-section bg-primary text-white mb-0" id={id}>
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">{AboutTitle}</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <p className="lead">
                          {
                            AboutMe1Sec
                          }
                        </p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="lead">
                          {
                            AboutMe2Sec
                          }
                        </p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <a target="_blank" rel="noopener noreferrer"
                        className="btn btn-xl btn-outline-light"
                        href={ButtonSite}>
                        {/* // href={'img/portfolio/CV_Simon_Selvadurai.pdf'}> */}
                        <i className={ButtonIconFontAwesome}></i>
                        {ButtonName}
                    </a>
                    {/* <a className="btn btn-outline-light btn-social mx-1" href={ButtonSite} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-linkedin-in"></i>
                            </a> */}
                </div>
            </div>
        </section>
    )
}

export default About
