import React from 'react';

const ProviderThumbnail = ({ title, id, imageUrl, linkUrl, providerName, providerTitle, history, match }) => (
    <div className="col-md-3 mb-4 centered-div" onClick={ () => history.push(`${match.url}${linkUrl}`) }>
        <a href={`/providers/${linkUrl}`}>
            <div className="card">
                <img src={`${imageUrl}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{providerName}</h4>
                    <p className="card-text">{providerTitle}</p>
                </div>
            </div>
        </a>
    </div>
)

export default ProviderThumbnail;
