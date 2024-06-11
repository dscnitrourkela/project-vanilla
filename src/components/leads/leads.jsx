import {
  LeadSectionContainer,
  LeadSectionContainer2,
  LeadsCard,
  LeadCardImage,
  LeadCardContainerText,
  LeadCardName,
  LeadCardRole,
  LeadCardOrganization
} from './leads.styles'

import { Lead, SRCchair } from '../../config/content/leads/leads'

export const Leads = () => {
  return (
    <LeadSectionContainer>
      <LeadsCard>
        <LeadCardImage bgimage={SRCchair.image} />
        <LeadCardContainerText>
          <LeadCardName>{SRCchair.name}</LeadCardName>
          <LeadCardRole>{SRCchair.role}</LeadCardRole>
          <LeadCardOrganization>{SRCchair.organization}</LeadCardOrganization>
        </LeadCardContainerText>
      </LeadsCard>
      <LeadSectionContainer2>
        {Lead.map((lead, index) => (
          <LeadsCard key={index}>
            <LeadCardImage bgimage={lead.image} />
            <LeadCardContainerText>
              <LeadCardName>{lead.name}</LeadCardName>
              <LeadCardRole>{lead.role}</LeadCardRole>
              <LeadCardOrganization>{lead.organization}</LeadCardOrganization>
            </LeadCardContainerText>
          </LeadsCard>
        ))}
      </LeadSectionContainer2>
    </LeadSectionContainer>
  )
}
