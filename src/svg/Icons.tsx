import * as React from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'
export const EnterSvg = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5.5h3.333A1.666 1.666 0 0 1 15.5 2.167v11.666a1.666 1.666 0 0 1-1.667 1.667H10.5m-4.167-3.333L10.5 8m0 0L6.333 3.833M10.5 8H.5"
    />
  </Svg>
)

export const Front = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
    />
  </Svg>
)

export const MailIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.333 5c0-.917-.75-1.667-1.666-1.667H3.333c-.916 0-1.666.75-1.666 1.667m16.666 0v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5m16.666 0L10 10.833 1.667 5"
    />
  </Svg>
)

export const BackIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.833 10H4.167m0 0L10 15.833M4.167 10 10 4.167"
    />
  </Svg>
)
export const CloseIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#475467"
      d="m5.333 15.833-1.166-1.166L8.833 10 4.167 5.333l1.166-1.166L10 8.833l4.667-4.666 1.166 1.166L11.167 10l4.666 4.667-1.166 1.166L10 11.167l-4.667 4.666Z"
    />
  </Svg>
)

export const DropDown = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path fill="#475467" d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6Z" />
  </Svg>
)

export const EyeClosed = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="#101828"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.498 18.498 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22m-5.06-5.06A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94l11.88 11.88Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const EyeOpen = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.498 18.498 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22m-5.06-5.06A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94l11.88 11.88Z"
    />
  </Svg>
)

export const SearchIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </Svg>
)

export const Star = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M23.438 11.438h-10.08l7.127-7.128a.564.564 0 0 0-.795-.795l-7.128 7.127V.562a.563.563 0 0 0-1.124 0v10.08L4.31 3.515a.563.563 0 1 0-.795.795l7.127 7.128H.562a.563.563 0 0 0 0 1.124h10.08L3.515 19.69a.562.562 0 1 0 .795.795l7.128-7.127v10.08a.562.562 0 1 0 1.124 0v-10.08l7.128 7.127a.563.563 0 1 0 .795-.795l-7.127-7.128h10.08a.562.562 0 1 0 0-1.124Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
