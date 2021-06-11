import React from 'react'
import { Router } from '@reach/router'
import ProvidersPage from '../providers/providers-gallery.component'
import ProviderTemplatePage from '../providers/providers-template.component'

const Providers = () => {
    return (
        <Router basepath='/providers'>
            <ProvidersPage path='/' /> 
            <ProviderTemplatePage path='/:providerId' />
        </Router>
    )
}

export default Providers
