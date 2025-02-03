import { useEffect, useState } from 'react'
import omoloLogo from './assets/omolo-logotype-type-only.svg'
import omoloLogoSmall from './assets/omolo-logo-small.svg'

function App() {
  const messages = [
    'Harnessing AI to modernize automotive regulatory compliance',
    'Making complex automotive regulations obvious',
    'The only AI solution built by automotive industry experts'
  ]

  const [displayTexts, setDisplayTexts] = useState(['', '', ''])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping || currentMessageIndex >= messages.length) return

    const currentMessage = messages[currentMessageIndex]
    let currentCharIndex = 0

    const typingInterval = setInterval(() => {
      if (currentCharIndex <= currentMessage.length) {
        setDisplayTexts(prev => {
          const newTexts = [...prev]
          newTexts[currentMessageIndex] = currentMessage.slice(0, currentCharIndex)
          return newTexts
        });
        currentCharIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setIsTyping(false)
          setTimeout(() => {
            if (currentMessageIndex < messages.length - 1) {
              setCurrentMessageIndex(prev => prev + 1)
              setIsTyping(true)
            }
          }, 500)
        }, 500)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentMessageIndex, isTyping])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      
      <header className="flex items-center justify-center bg-white py-4">
        {/* Logo */}
        <img src={omoloLogo} className="w-60" alt="Omolo Logo" />
      </header>
      
      {/* Animated Messages Container */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex flex-col gap-2">
          {displayTexts.map((text, index) => (
            <div key={index} className="h-8 flex items-center">
              <p className="text-2xl text-gray-700">
                {text}
                {index === currentMessageIndex && isTyping && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="mb-16">
        <p className="text-xl text-gray-600 max-w-2xl text-center">
          Modernize compliance, otimize capital, and unleash your teams potential with Omolo's AI powered SaaS platform.
        </p>
      </div>

      {/* Contact */}
      <a href="mailto:info@omoloai.com">
        <div className="flex flex-col justify-center items-center gap-2 hover:opacity-60">
          <div className="text-lg text-gray-700 font-[500]">Talk to us</div>
          <img src={omoloLogoSmall} className="w-8" alt="Omolo Logo" />
        </div>
      </a>
    </div>
  )
}

export default App
