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
  
  /* Animated Messages Container */
  return (
    <div className="flex flex-col gap-2">
      {displayTexts.map((text, index) => (
        <div key={index} className="h-8 flex">
          <p className="text-lg text-gray-700">
            {text}
            {index === currentMessageIndex && isTyping && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App
