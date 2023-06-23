import React from 'react';
// import '../assets/scss/Cv1.scss';
// import { withTranslation } from 'react-i18next';
// import i18n from '../../i18n';

function Cv1(props) {
    document.getElementsByTagName("body")[0].style.overflow = "none";
    // i18n.changeLanguage(props.language);

    function returnLanguages() {
        return "english";
        var elements = [];
        var tempLanguages = props?.values?.languages.sort(function (a, b) {
            return a.date - b.date;
        });
        for (let index = 0; index < tempLanguages.length; index++) {
            elements.push(
                <div key={index} className="sectionLanguage">
                    <span className="language">{tempLanguages[index].name}</span>
                    <span className="level">{tempLanguages[index].level}</span>
                </div>
            );
        }
        return elements;
    }

    function returnSkills() {
        return ["skill"];
        var elements = [];
        var tempSkills = props?.values?.skills.sort(function (a, b) {
            return a.date - b.date;
        });
        for (let index = 0; index < tempSkills.length; index++) {
            elements.push(
                <div key={index} className="skillItem">
                    <p>{props?.values?.skills[index].name}</p>
                    <div className="progressBar">
                        <div style={{ width: tempSkills[index].rating + "%" }} className="progressFilling">
                        </div>
                    </div>
                </div>
            );
        }
        return elements;
    }

    function returnEmployments() {
        return ["employ"]
        var elements = [];
        var tempEmployments = props?.values?.employments.sort(function (a, b) {
            return a.date - b.date;
        });
        for (let index = 0; index < tempEmployments.length; index++) {
            elements.push(
                <div key={index} className="employmentWrapper">
                    <div className="employment__head">
                        <span className="employment__jobTitle">{tempEmployments[index].jobTitle}, {tempEmployments[index].employer}</span>
                        <span>{tempEmployments[index].begin} - {tempEmployments[index].end}</span>
                    </div>
                    <div className="employment__body">
                        <p>
                            {tempEmployments[index].description}
                        </p>
                    </div>
                </div>
            );
        }
        return elements;
    }

    function returnEducations() {
        return ["univier"]
        var elements = [];
        var tempEducations = props?.values?.educations.sort(function (a, b) {
            return a.date - b.date;
        });
        for (let index = 0; index < tempEducations.length; index++) {
            elements.push(
                <div className="employmentWrapper">
                    <div className="employment__head">
                        <span className="employment__jobTitle">{tempEducations[index].degree}, {tempEducations[index].school}</span>
                        <span>{tempEducations[index].started} - {tempEducations[index].finished}</span>
                    </div>
                    <div className="employment__body">
                        <p>{tempEducations[index].description}</p>
                    </div>
                </div>
            );
        }
        return elements;
    }

    const t = (a) => {
        return a
    }

    return (
        <div id="resumen" className="cv1-board">
            <div className="cv-content">
                {/* Head */}
                <div className="cv-head">
                    {/* Image */}
                    <div className="cv__imageWrapper">
                        <div className="cv__image">
                            {props?.values?.photo !== null ? <img alt='photoOf' className="photo" src={props?.values?.photo} /> : "photo"}
                        </div>
                    </div>
                    <div className="cv__head-details">
                        <h1>{props?.values?.firstname}  {props?.values?.lastname} </h1>
                        <h3> {props?.values?.occupation} </h3>
                    </div> {/* end Head */}
                    {/* End Body */}
                </div>
                {/* Body */}
                <div className="cv__body">
                    <div className="cv__bodyLeft">
                        {/* Left Section  */}
                        <div className="cv__leftSecton">
                            <div className="sectionTitle">
                                <h1>{t("resume.info")}</h1>
                                <div style={{ width: "20%" }} className="sectionTitle__underLine">
                                </div>
                                {/* details */}
                                <div className="subItem">
                                    <h3>{t("resume.address")}</h3>
                                    <p>{props?.values?.address}, {props?.values?.city},{props?.values?.postalcode},{props?.values?.country}</p>
                                </div>
                                <div className="subItem">
                                    <h3>{t("resume.phone")}</h3>
                                    <p>{props?.values?.phone}</p>
                                </div>
                                <div className="subItem">
                                    <h3>{t("resume.email")}</h3>
                                    <p>{props?.values?.email}</p>
                                </div>
                            </div>
                        </div>
                        {/* Left Section  */}
                        <div className="cv__leftSecton">
                            <div className="sectionTitle">
                                <h1>{t("resume.languages")}</h1>
                                <div style={{ width: "20%" }} className="sectionTitle__underLine">
                                </div>
                                <div className="sectionLanguages">
                                    {/* Language Item */}
                                    {returnLanguages()}
                                </div>
                            </div>
                        </div>
                        {/* Left Section  */}
                        <div className="cv__leftSecton">
                            <div className="sectionTitle">
                                <h1>{t("resume.skills")}</h1>
                                <div style={{ width: "20%" }} className="sectionTitle__underLine">
                                </div>
                                {returnSkills()}
                            </div>
                        </div>
                    </div> {/* End Body left */}
                    {/* Body Right */}
                    <div className="bodyRight">
                        {/* Right section  : Summary*/}
                        <div className="rightSection">
                            <div className="sectionTitle">
                                <h1>{t("resume.personalSummary")}</h1>
                                <div style={{ width: "100%" }} className="sectionTitle__underLine">
                                </div>
                                <p>
                                    {props?.values?.summary}
                                </p>
                            </div>
                        </div> {/* End   Summary*/}
                        {/* Right section  : Employment*/}
                        <div className="rightSection">
                            <div className="sectionTitle">
                                <h1>{t("resume.employmentHistory")}</h1>
                                <div style={{ width: "100%" }} className="sectionTitle__underLine">
                                </div>
                                {/* Employment Item */}
                                {returnEmployments()}
                            </div>
                        </div>  {/* End   Employment*/}
                        {/* Right section  : Education*/}
                        <div className="rightSection">
                            <div className="sectionTitle">
                                <h1>{t("resume.educationHistory")}</h1>
                                <div style={{ width: "100%" }} className="sectionTitle__underLine">
                                </div>
                                {/* Education Item */}
                                {returnEducations()}
                            </div>
                        </div>  {/* End   Employment*/}
                    </div>{/*  end Body Right */}
                </div>{/* End Body */}
            </div>{/* end  cv-content */}
        </div>
    )
}

// const MyComponent = withTranslation('common')(Cv1)
export default Cv1;