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
        {Lead.map((lead) => (
          <Suspense key={lead.id} fallback={<Loading>Loading...</Loading>}>
            <LeadsCard key={lead.id}>
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
