import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/components/CtaAll.css';

const CtaAll = () => {
    return (
        <section className="Section-Ctall">
            <div className="cnt-cardCTAservices">
                <div className="cardCTAservices">
                    <div>
                        <h4 className="titleCardCTAServ">Designing the Future of Architecture Today</h4>
                        <p className="textCardCTAServ">Crafting Spaces That Reflect Your Dreams</p>
                        <div className="btn-fatherCTAbtn">
                            <a href="/contact" className="btn-OneCtaServices">
                                Contact Us
                                <i className="arrowCtaServices fas fa-arrow-up-right-from-square"></i>
                            </a>

                            <a href="/services" className="btn-TwoCtaServices">
                                Our Services
                                <i className="arrowCtaServices fas fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="team-section">
                        <div className="team-images">
                            <img src="/images/avatarOne.png" alt="Person 1" className="team-member one" />
                            <img src="/images/avatarTwo.png" alt="Person 2" className="team-member two" />
                            <img src="/images/avatarThree.png" alt="Person 3" className="team-member three" />
                        </div>
                        <h4 className='tittleH2Team'>Shaping Spaces, Inspiring Futures</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaAll;
