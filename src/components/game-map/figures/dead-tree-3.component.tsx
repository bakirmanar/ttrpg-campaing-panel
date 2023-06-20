import React from 'react'
import { GameMapFigure } from '../game-map.models'

const SHAPE_PATH = 'M8.5 24.5V21M8.5 11V9.5M8.5 11V16M8.5 11L7 12.5M3.5 16L5 14.5M4 2L5.875 4.5M13 2.5L11.5 4.16667M8.5 9.5V9.125M8.5 9.5L9.875 10.5M14 13.5L9.875 10.5M8.5 16V19M8.5 16L9.75 15.25M11 14.5L9.75 15.25M8.5 21L11 20M8.5 21V19M8.5 19L6.5 18M8.5 8.75V9.125M8.5 8.75V8.375M8.5 8.75L10 8.6875M14.5 8.5L13 8.5625M8.5 3.5V4.5M8.5 9.125L7.375 9.58705M1.5 12L2.75 11.4866M8.5 8.375V8L7.1875 6.25M8.5 8.375L5 7.4375M1.5 6.5L3.5 7.03571M10.75 5L13.5 4.5M10.75 5L9.625 6.25M10.75 5L11.5 4.16667M11.5 8.625L13.5 6.5M11.5 8.625L13 8.5625M11.5 8.625L10 8.6875M11.6396 11.7833L12.5 15M10.75 11H14M13 8.5625L14.5 10M9.625 6.25L8.5 7.5V5.5M9.625 6.25L11.5 6.5M8.5 4.5L10 2.5M8.5 4.5V5.5M11.5 4.16667L11 1.5M5.875 4.5L6 1M5.875 4.5L7.1875 6.25M8.5 5.5L7 4M3.5 7.03571L2.78875 4.16667M3.5 7.03571L5 7.4375M5 7.4375L2.5 8.5M7.1875 6.25L4.5 6M4 10.9732L2.78875 13M4 10.9732L6.25 10.0491M4 10.9732L2.75 11.4866M6.25 10.0491L4 9.5M6.25 10.0491L7.375 9.58705M2.75 11.4866L1 10M7 12.5H4.5M7 12.5L5.875 13.625M5 14.5H2.78875M5 14.5L5.875 13.625M5.875 13.625V16.5M9.875 10.5L10 12.5M9.75 15.25L11 16.5M9.75 15.25L10 13.5M10 8.6875L11.5 10.0491M7.375 9.58705L6.5 11.4866'

const DeadTree3 = ({
  x,
  y,
}: GameMapFigure) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d={SHAPE_PATH} stroke="black" />
    </g>
  )
}

export default DeadTree3
