import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const NoImage = (props: SvgProps) => (
  <Svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none">
    <rect width="1024" height="1024" fill="#888888" fillOpacity="0.1" />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M332 405C332 388.431 345.431 375 362 375H662C678.569 375 692 388.431 692 405V619C692 635.569 678.569 649 662 649H362C345.431 649 332 635.569 332 619V405ZM452 455C452 477.091 434.091 495 412 495C389.909 495 372 477.091 372 455C372 432.909 389.909 415 412 415C434.091 415 452 432.909 452 455ZM393 599H630.5C637.127 599 642.5 593.627 642.5 587V528.971C642.5 525.788 641.236 522.736 638.985 520.485L584.985 466.485C580.299 461.799 572.701 461.799 568.015 466.485L487.485 547.015C482.799 551.701 475.201 551.701 470.515 547.015L443.985 520.485C439.299 515.799 431.701 515.799 427.015 520.485L384.515 562.985C382.264 565.236 381 568.288 381 571.471V587C381 593.627 386.373 599 393 599Z"
      fill="#888888"
      fill-opacity="0.2"
    />
  </Svg>
)

export default NoImage
