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
import { LeadsData } from '../../config/index'
import { Suspense } from 'react'

export const Leads = () => {
  return (
    <LeadSectionContainer>
      <LeadsCard>
        <LeadCardImage bgimage={LeadsData[0].image} />
        <LeadCardContainerText>
          <LeadCardName>{LeadsData[0].name}</LeadCardName>
          <LeadCardRole>{LeadsData[0].role}</LeadCardRole>
          <LeadCardOrganization>{LeadsData[0].organization}</LeadCardOrganization>
        </LeadCardContainerText>
      </LeadsCard>
      <LeadSectionContainer2>
        {LeadsData[1].map((lead) => (
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
