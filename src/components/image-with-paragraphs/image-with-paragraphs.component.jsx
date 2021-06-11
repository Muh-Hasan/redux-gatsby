import React from 'react';
import { withRouter } from 'react-router-dom';
import './image-with-paragraphs.style.scss';

const ImageWithParagraphsComponent = ({ title, id, imageUrl, bodyContent,  sectionHeader1, sectionHeader2, sectionHeader3, sectionCopy3, sectionCopy1, htmlCopy1, htmlCopy2, sectionCopy2, sectionId1, sectionId2, sectionId3, htmlCopy3, sectionCopy4, history, linkUrl, match }) => (
    <section className="container-fluid block-container-3 image-2-paragraphs">
        <div className="row justify-content-around" id={`${sectionId1}`}>
            <div className="col-md-8 col-sm-12">
                <h4>{sectionHeader1}</h4>
                <p className="border-bottom">
                    {sectionCopy1}
                    <div dangerouslySetInnerHTML={{__html: htmlCopy1}} />
                </p>
            </div>
        </div>

        <div className="row justify-content-around" id={`${sectionId2}`}>
            <div className="col-md-8 col-sm-12 ">
                <h4>{sectionHeader2}</h4>
                <p className="border-bottom">
                    {sectionCopy2}
                    <div dangerouslySetInnerHTML={{__html: htmlCopy2}} />
                </p>
            </div>
        </div>
        {htmlCopy3 &&
            <div className="row justify-content-around" id={`${sectionId3}`}>
                <div className="col-md-8 col-sm-12 ">
                    <h4>{sectionHeader3}</h4>
                    <p className="border-bottom">
                        <div dangerouslySetInnerHTML={{__html: htmlCopy3}} />
                    </p>
                </div>
            </div>
        }
        { sectionCopy3 &&
        <div className="row justify-content-around" id={`${sectionId3}`}>
            <div className="col-md-8 col-sm-12 ">
                <h4>{sectionHeader3}</h4>
                <p className="border-bottom">
                    {sectionCopy3}
                </p>
            </div>
        </div>
        }
        {sectionCopy4 &&
            <div className="row justify-content-around">
                <div className="col-md-8 col-sm-12 ">
                    <p className="border-bottom">
                        {sectionCopy4}
                    </p>
                </div>
            </div>
        }
        <img src={`${imageUrl}`} alt=""/>
    </section>
        )

export default withRouter(ImageWithParagraphsComponent);
