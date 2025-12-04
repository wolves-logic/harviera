"use client"
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Soft radial wash to unify background */}
      <div className="absolute inset-0 bg-pastel-gradient opacity-80" />

      {/* Floating vibrant blobs */}
      <div
        className="absolute -top-24 -left-24 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-60"
        style={{
          background: 'radial-gradient(closest-side, #C4A5FF 45%, #E7D7FF 70%, transparent)',
          animation: 'harviera-float-1 26s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-55"
        style={{
          background: 'radial-gradient(closest-side, #7DD3FC 45%, #D9EFFF 70%, transparent)',
          animation: 'harviera-float-2 32s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-50"
        style={{
          background: 'radial-gradient(closest-side, #FDA4AF 45%, #FFE7EF 70%, transparent)',
          animation: 'harviera-float-3 30s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-1/2 left-[-10rem] h-[24rem] w-[24rem] rounded-full blur-3xl opacity-45"
        style={{
          background: 'radial-gradient(closest-side, #FB923C 45%, #FFD9C2 70%, transparent)',
          animation: 'harviera-float-4 28s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-50"
        style={{
          background: 'radial-gradient(closest-side, #34D399 45%, #DFFFEA 70%, transparent)',
          animation: 'harviera-float-5 29s ease-in-out infinite',
        }}
      />

      {/* Local keyframes for slow float */}
      <style jsx>{`
        @keyframes harviera-float-1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(30px, 20px, 0) scale(1.08); }
        }
        @keyframes harviera-float-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-20px, 18px, 0) scale(1.07); }
        }
        @keyframes harviera-float-3 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(25px, -22px, 0) scale(1.06); }
        }
        @keyframes harviera-float-4 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-22px, -18px, 0) scale(1.05); }
        }
        @keyframes harviera-float-5 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(18px, 24px, 0) scale(1.07); }
        }
      `}</style>
    </div>
  )
}
