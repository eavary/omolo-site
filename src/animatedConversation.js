
const conversation = [
  {
      question: "What is omolo?",
      answer: "Omolo is the only AI powered SaaS platform built by industry experts, modernizing Automotive regulatory compliance"
  },
  {
      question: "What value does Omolo provide?",
      answer: "Faster time to market. Mitigate risks. Avoid costly mistakes. More efficient use of personnel. Better use of capital."
  },
  {
      question: "How does Omolo work?",
      answer: "Omolo harnesses AI to get information faster and applies agentic technologies to automate critical business to business processes tied to engineering decisions, ensuring regulatory objectives are never missed over time and between department hand offs."
  },
  {
      question: "Why Omolo?",
      answer: "Omolo gets to the heart of what matters -- fostering collaboration and increasing transparency while providing audit capabilities."
  }
]

const messagesContainer = document.getElementById('messages')
const chatInput = document.getElementById('chatInput')
const tagline = document.getElementById('tagline')

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
  messageWrapper.classList.add('message-container', 'flex')

  const messageDiv = document.createElement('div')
  messageDiv.classList.add('message')
  if (isUser) {
    messageDiv.classList.add('user-message')
  } else {
    messageDiv.classList.add('assistant-message')
  }
  messageDiv.textContent = text
  messageWrapper.appendChild(messageDiv)
  messagesContainer.appendChild(messageWrapper)

  return messageDiv
}

async function animateConversation() {
  await sleep(1000);

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
      chatInput.value = ''
  }
}

// Start the animation when the page loads
window.addEventListener('load', animateConversation)
