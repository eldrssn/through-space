import styled from 'styled-components'

import { Colors } from '@/tokens'

export const DownButton = styled.button`
  background: transparent;
  cursor: pointer;
  width: 59rem;
  height: 59rem;
  border: 2rem solid ${Colors.GREEN};
  border-radius: 100%;
  backdrop-filter: blur(4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`
