import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'SOMA Health'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0D1B2A',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <svg width="150" height="150" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="39.5" fill="none" stroke="#F5F7F8" strokeWidth="15" />
            <g fill="#02C39A" transform="translate(16 17) scale(0.68)">
              <path d="M 45 27 Q 42 27.5 40 30 Q 37 33 34 37 L 25 50 Q 23 54 26.5 54.5 Q 30 54 32 51 L 39 40 Q 41 38 42 42 L 42 52 L 42 60 L 39 90 Q 39 93 42.7 93 Q 44.5 93 44.5 90 L 47.5 64 Q 50 61 52.5 64 L 55.5 90 Q 55.5 93 59.3 93 Q 61 93 61 90 L 58 60 L 58 52 L 58 42 Q 59 38 61 40 L 68 51 Q 70 54 73.5 54.5 Q 77 54 75 50 L 66 37 Q 63 33 60 30 Q 58 27.5 55 27 Q 50 25.5 45 27 Z" />
              <circle cx="50" cy="12.5" r="8.5" />
            </g>
          </svg>
          <div style={{ display: 'flex', fontSize: 110, fontWeight: 700, letterSpacing: -4 }}>
            <span style={{ color: '#F5F7F8' }}>SOMA</span>
            <span style={{ color: '#02C39A' }}>&nbsp;Health</span>
          </div>
        </div>
        <div style={{ marginTop: 32, fontSize: 36, color: '#9FB3C0' }}>
          La tua salute, tutta in un posto.
        </div>
      </div>
    ),
    { ...size },
  )
}
