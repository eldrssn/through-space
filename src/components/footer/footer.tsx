import { FC } from 'react'

import { FooterAd, FooterItem, FooterList, FooterStyled } from './footer.styled'

const FOOTER_ITEMS = [
  {
    text: 'Правила модерации ',
    link: 'https://docs.google.com/document/d/19Q1ZVseBfbni8ks6zm9rBg4mZgvWrxNSMnssBjyHi98/edit?tab=t.0#heading=h.9ij3fyapnrnc',
  },
  {
    text: 'Правила конкурса',
    link: 'https://docs.google.com/document/d/1Q48iWt8aKZkKepu2e5hXoRmsz8X38fCr/edit',
  },
  {
    text: 'Вопросы и ответы',
    link: 'https://docs.google.com/document/d/1s3QSGf1peh8_TCCMf_Ltqel6S1-ovVssaQozPUIZhLU/edit?tab=t.0#heading=h.z9gwvyp0td0u',
  },
]

export const Footer: FC = () => {
  return (
    <FooterStyled>
      <FooterList>
        <FooterAd>Реклама. ПАО Сбербанк. Erid: 2W5zFGFJTVS</FooterAd>
        {FOOTER_ITEMS.map((item, index) => (
          <FooterItem key={index + 1}>
            <a href={item.link} target="_blank">
              {item.text}
            </a>
          </FooterItem>
        ))}
      </FooterList>
    </FooterStyled>
  )
}

export default Footer
