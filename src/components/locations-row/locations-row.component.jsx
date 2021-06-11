import React from 'react';
import { withRouter } from 'react-router-dom';
import './locations-row.styles.scss';

const LocationsRowComponent = ( {title, id, address1, address2, phone, fax, linkUrl, mapUrl } ) => (
    <section>
        <div className="locations-row-container">
            <div className="row">
                <div className="col-md-6">
                    <h2>{title}</h2>
                    <p>{address1}<br/>
                        {address2}</p>
                    <p>
                        <a href={`${linkUrl}`}
                           target="_blank" rel="noreferrer">Map it <i className="fas fa-external-link-alt no-underline"></i></a></p>
                    <p><b>Contact Info</b></p>
                    <p>Monday–Friday, 8 a.m–5 p.m.</p>
                    <p><a href={`tel:${phone}`}>{phone}</a><br/>
                        FAX: {fax}</p>
                </div>

                <div className="col-md-6">
                    <iframe title="Map of location" width="510" height="300" loading="lazy" allowFullScreen src={mapUrl}></iframe>
                </div>
            </div>
        </div>
    </section>

)

export default withRouter(LocationsRowComponent);
