import {
  LeadSectionContainer,
  LeadSectionContainer2,
  LeadsCard,
  LeadCardImage,
  LeadCardContainerText,
  LeadCardName,
  LeadCardRole,
  LeadCardOrganization,
  Loading
} from './leads.styles'
import { Lead, SRCchair } from '../../config/content/leads/leads'
import { Suspense } from 'react'

export const Leads = () => {
  return (
    <LeadSectionContainer id="lead">
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
          <Suspense key={index} fallback={<Loading>Loading...</Loading>}>
            <LeadsCard key={index}>
              <LeadCardImage bgimage={lead.image} />
              <LeadCardContainerText>
                <LeadCardName>{lead.name}</LeadCardName>
                <LeadCardRole>{lead.role}</LeadCardRole>
                <LeadCardOrganization>{lead.organization}</LeadCardOrganization>
              </LeadCardContainerText>
            </LeadsCard>
          </Suspense>
        ))}
      </LeadSectionContainer2>
    </LeadSectionContainer>
  )
}
