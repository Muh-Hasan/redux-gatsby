import React from 'react';
import ProviderThumbnail from "./provider-thumbnail/provider-thumbnail.component";
import "./provider-gallery.styles.scss"
import {connect} from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectProviderSections } from "../../redux/provider/provider.selectors";


const ProviderGallery = ({ sections }) => (
            <div>
                <div className="row gallery-row">
                    {
                        sections.map( ({ id, ...otherSectionProps }) => (
                            <ProviderThumbnail key={id} {...otherSectionProps} />
                        ))
                    }
                </div>
            </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectProviderSections
});

export default connect(mapStateToProps)(ProviderGallery);
