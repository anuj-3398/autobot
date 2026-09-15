'use client'

import { useEffect, useState } from 'react'

const providers = [
  {
    name: 'ChatGPT',
    company: 'OpenAI',
    symbol: '✦',
    className: 'chatgpt',
    source: 'https://openai.com/chatgpt/pricing',
    plans: [
      ['Free', '$0', '/ month'], ['Go', '$8', '/ month'], ['Plus', '$20', '/ month'],
      ['Pro', '$200', '/ month'], ['Business · annual', '$25', '/ user / month'],
      ['Business · monthly', '$30', '/ user / month'], ['Enterprise', 'Custom', 'pricing'],
    ],
  },
  {
    name: 'Claude',
    company: 'Anthropic',
    symbol: '✺',
    className: 'claude',
    source: 'https://www.anthropic.com/pricing',
    plans: [
      ['Free', '$0', '/ month'], ['Pro · annual', '$17', '/ month'], ['Pro · monthly', '$20', '/ month'],
      ['Max 5×', '$100', '/ month'], ['Max 20×', '$200', '/ month'],
      ['Team · annual', '$25', '/ user / month'], ['Team · monthly', '$30', '/ user / month'],
      ['Enterprise', 'Custom', 'pricing'],
    ],
  },
  {
    name: 'Gemini',
    company: 'Google',
    symbol: '✳',
    className: 'gemini',
    source: 'https://gemini.google.com/u/0/faq#subscription',
    plans: [
      ['Free', '$0', '/ month'], ['AI Plus', '$7.99', '/ month'], ['AI Pro', '$19.99', '/ month'],
      ['AI Ultra', '$99.99', '/ month'], ['AI Ultra 2×', '$200', '/ month'],
      ['Enterprise', '$21', '/ user / month'],
    ],
  },
  {
    name: 'Cursor',
    company: 'Anysphere',
    symbol: '⌥',
    className: 'cursor',
    source: 'https://www.cursor.com/pricing',
    plans: [
      ['Hobby', '$0', '/ month'], ['Pro', '$20', '/ month'], ['Pro+', '$60', '/ month'],
      ['Ultra', '$200', '/ month'], ['Teams', '$40', '/ user / month'],
      ['Teams Premium', '$120', '/ user / month'], ['Enterprise', 'Custom', 'pricing'],
    ],
  },
]

export default function Home() {
  const [portoStatus, setPortoStatus] = useState('Checking service…')

  useEffect(() => {
    fetch('/api/hello-porto')
      .then((response) => response.json())
      .then(({ message }) => setPortoStatus(message))
      .catch(() => setPortoStatus('Hello Porto service is unavailable.'))
  }, [])

  return (
    <main className="page-shell">
      <section className="intro" aria-labelledby="page-title">
        <p className="hello-avail">👋 Hello Avail</p>
        <p className="eyebrow">AI subscription guide</p>
        <h1 id="page-title">Hello, world.</h1>
        <p className="lede">A simple USD snapshot of ChatGPT, Claude, Gemini, and Cursor plans.</p>
        <p className="porto-status"><span aria-hidden="true">●</span> {portoStatus}</p>
      </section>

      <section className="pricing-grid" aria-label="AI plan pricing">
        {providers.map((provider) => (
          <article className={`provider-card ${provider.className}`} key={provider.name}>
            <div className="provider-heading">
              <div><p className="provider-label">{provider.company}</p><h2>{provider.name}</h2></div>
              <span className="mark" aria-hidden="true">{provider.symbol}</span>
            </div>
            <ul className="plan-list">
              {provider.plans.map(([plan, price, unit]) => (
                <li key={plan}><span>{plan}</span><strong>{price} <small>{unit}</small></strong></li>
              ))}
            </ul>
            <a href={provider.source} target="_blank" rel="noreferrer">View official pricing <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </section>

      <footer>Prices shown in USD before tax. Checked September 7, 2026; availability and regional pricing can vary.</footer>
    </main>
  )
}
