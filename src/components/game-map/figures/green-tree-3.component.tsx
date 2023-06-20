import React from 'react'
import { GameMapFigure } from '../game-map.models'
import { COLORS } from '../game-map.variables'

const TREE_SHAPE_PATH = 'M6.57947 15.9378L6.61606 19.5051L7.616 19.4949L7.58004 15.9889C10.1835 15.8731 11.9233 14.8622 13.0185 13.5738C14.1667 12.223 14.575 10.6042 14.575 9.5V8.69098L13.8514 9.05279C12.9469 9.50501 12.2135 9.28561 11.7276 9.11826C11.8404 8.67181 11.9386 8.28983 12.024 7.95878L12.0722 7.77166L12.0722 7.77163L12.0723 7.77149L12.0727 7.76972C12.1097 7.62631 12.1442 7.49285 12.1761 7.36837C12.4847 6.16662 12.575 5.75672 12.575 5V4.10931L11.8146 4.57315L9.8122 5.79466C8.97778 4.25186 7.72756 2.44545 6.92856 1.64645L6.39238 1.11027L6.11076 1.8143C5.71013 2.81589 5.213 4.05861 4.75405 5.11294C4.52441 5.6405 4.30721 6.11419 4.11868 6.4837C4.02434 6.66862 3.93996 6.82194 3.86719 6.94034C3.86374 6.94595 3.86035 6.95142 3.85702 6.95677L1.1572 6.5068L0.636368 6.42L0.578058 6.94478C0.147162 10.8228 1.50614 14.143 4.82499 15.4645C5.36396 15.6791 5.94924 15.8381 6.57947 15.9378Z'
const TREE_SHADOW_PATH = 'M7.07499 15.5C12.575 15.5 14.075 11.5 14.075 9.5C12.9378 10.0686 12.0065 9.74473 11.5031 9.56965C11.2982 9.4984 11.1642 9.45179 11.116 9.5C11.2841 8.8278 11.4238 8.28357 11.5398 7.83393L11.5881 7.64673L11.5886 7.64478C11.6256 7.5013 11.66 7.36815 11.6918 7.24403C11.7126 7.16268 11.4184 7.2 10.075 8C9.27296 8.47762 9.23707 9.29744 9.20051 10.1326C9.16053 11.0459 9.11974 11.9776 8.07499 12.5C7.45166 12.8117 7.02261 12.9291 6.69503 13.0187C5.97154 13.2166 5.74306 13.2792 5.00995 15C5.62707 15.2457 6.31542 15.4156 7.07499 15.5Z'

const GreenTree3 = ({
  x,
  y,
}: GameMapFigure) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d={TREE_SHAPE_PATH} fill={COLORS.GREEN_TREE_PRIMARY} stroke="black" />
      <path d={TREE_SHADOW_PATH} fill={COLORS.GREEN_TREE_ACCENT} />
    </g>
  )
}

export default GreenTree3
