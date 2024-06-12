import {
  LeadSectionContainer,
  LeadSectionContainer1,
  LeadSectionContainer2,
  LeadsCard,
  LeadCardImage,
  LeadCardContainerText,
  LeadCardName,
  LeadCardRole,
  LeadCardOrganization,
  Loading
} from './leads.styles'
import { Lead, SRCchairs } from '../../config/content/leads/leads'
import { Suspense } from 'react'
import {
  RegisterCardContainer,
  RegisterCardContainerImage,
  RegisterCardContainerText,
  RegisterCardImageName,
  RegisterCardImageRole,
  TeamSectionHeading
} from '../leads/registerContainer.styles'
import { apostrophe } from '../../config/content/registrationHelp/registrationHelp'

export const Leads = () => {
  return (
    <section>
      <TeamSectionHeading>Meet the team</TeamSectionHeading>
      <LeadSectionContainer>
        <RegisterCardContainer>
          <RegisterCardContainerImage />
          <RegisterCardContainerText>
            <RegisterCardImageName>{apostrophe[4].quoteImageName}</RegisterCardImageName>
            <RegisterCardImageRole>{apostrophe[5].quoteImageDesignation}</RegisterCardImageRole>
          </RegisterCardContainerText>
        </RegisterCardContainer>
        <LeadSectionContainer1>
          {SRCchairs.map((SRCchair) => (
            <LeadsCard key={SRCchair.id}>
              <LeadCardImage bgimage={SRCchair.image} />
              <LeadCardContainerText>
                <LeadCardName>{SRCchair.name}</LeadCardName>
                <LeadCardRole>{SRCchair.role}</LeadCardRole>
                <LeadCardOrganization>{SRCchair.organization}</LeadCardOrganization>
              </LeadCardContainerText>
            </LeadsCard>
          ))}
        </LeadSectionContainer1>
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
    </section>
  )
}
