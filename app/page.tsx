import dynamic from 'next/dynamic'

const FileSharingWithNoSSR = dynamic(
  () => import('@/components/file-sharing'),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">WebRTC File Sharing</h1>
        <FileSharingWithNoSSR />
      </div>
    </main>
  )
}
