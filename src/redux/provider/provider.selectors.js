import { createSelector } from "reselect"

const PROVIDER_ID_MAP = {
  "robert-mcbeath": 1,
  "jason-zommick": 2,
  "michael-finkelstein": 3,
  "mulugeta-kassahun": 4,
  "david-v-ludlow": 5,
  "sarah-ryan": 6,
  "craig-hunter": 7,
  "jeffery-wilson": 8,
  "jason-orien": 9,
  "tuan-khuu": 10,
  "tina-palone": 11,
  "jonathan-higginson": 12,
  "ernestine-ngam": 13,
}

const selectProviders = state => state.provider

export const selectProviderSections = createSelector(
  [selectProviders],
  provider => provider.sections
)

export const selectIndividualProvider = providerUrlParam =>
  createSelector([selectProviderSections], providers =>
    providers.find(
      provider => provider.id === PROVIDER_ID_MAP[providerUrlParam]
    )
  )
