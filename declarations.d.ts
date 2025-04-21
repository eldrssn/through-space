// declare module '*.svg?react' {
//   import { FC, SVGProps } from 'react'
//   const content: FC<SVGProps<SVGSVGElement>>
//   export default content
// }

declare module '*.svg' {
  import React from 'react'
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}
