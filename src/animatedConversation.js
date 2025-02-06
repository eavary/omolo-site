
const conversation = [
  {
      question: "How does Omolo work?",
      answer: `Omolo harnesses Al to transform complex regulations into clear, actionable 
        insights—slashing review time, supercharging collaborations, and speeding 
        development cycles.`
  },
  {
    question: "What does this mean for my team?",
    answer: `Omolo’s AI-powered tools empower:
      <ul class="list-disc list-inside">
        <li>Leaders to spot and eliminate risks before they impact timelines</li>
        <li>Designers to build compliance into concepts from day one</li>
        <li>Engineers to stay ahead of regulatory changes automatically</li>
        <li>Compliance teams to manage global products simultaneously</li>
      </ul>`
  },
  {
      question: "Why Omolo?",
      answer: `Omolo gets to the heart of what matters -- accelerating time to market, 
        reducing compliance risks, boosting product innovation. Omolo’s AI-powered solutions 
        streamline automotive regulatory compliance, giving you a competitive edge.`
  }
]

const chatContainer = document.getElementById('chat-container')
const messagesContainer = document.getElementById('messages-container')
const chatInput = document.getElementById('chatInput')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function typeText(element, text) {
  return new Promise(async (resolve) => {
      element.value = '';
      for (let i = 0; i < text.length; i++) {
          element.value += text[i];
          await sleep(50);
      }
      resolve()
  })
}

function createMessage(text, isUser) {
  const messageWrapper = document.createElement('div')
  messageWrapper.classList.add('message-wrapper', 'flex')

  const messageDiv = document.createElement('div')
  messageDiv.classList.add('message')
  if (isUser) {
    messageDiv.classList.add('user-message')
  } else {
    messageDiv.classList.add('assistant-message')
  }
  messageDiv.innerHTML = text
  messageWrapper.appendChild(messageDiv)
  messagesContainer.appendChild(messageWrapper)

  // Scroll to the bottom of the messages container
  chatContainer.scrollTo({
    top: messagesContainer.scrollHeight,
    behavior: 'smooth'
  })

  return messageDiv
}

async function animateConversation() {
  await sleep(3000);

  for (const [index, exchange] of conversation.entries()) {
      // Type the question
      await typeText(chatInput, exchange.question);
      await sleep(500);

      // Show the question in the message area
      const questionDiv = createMessage(exchange.question, true);
      await sleep(100);
      questionDiv.classList.add('visible');
      await sleep(1000);

      // Show the answer
      const answerDiv = createMessage(exchange.answer, false);
      await sleep(100);
      answerDiv.classList.add('visible');
      await sleep(2000);

      // Clear the input
      // chatInput.value = ''
  }
}

// Start the animation when the page loads
window.addEventListener('load', animateConversation)
