import Reveal from './Reveal'
import CenterWrapper from './CenterWrapper'

const STEPS = [
  {
    num: '01',
    eyebrow: 'Onde tudo começa',
    title: 'Briefing & Estratégia',
    desc: 'Reunião de alinhamento profundo: entendemos a marca, o posicionamento desejado e os objetivos do mês. O plano editorial completo é entregue antes de qualquer produção começar.',
  },
  {
    num: '02',
    eyebrow: 'A voz antes da câmera',
    title: 'Roteiros & Copys',
    desc: 'Desenvolvimento de todos os roteiros e legendas com estrutura narrativa, ganchos de atenção e call to action. Revisados e aprovados antes da captação.',
  },
  {
    num: '03',
    eyebrow: 'Da ideia ao frame',
    title: 'Captação & Produção',
    desc: 'Captação presencial ou orientação remota completa. Edição, thumbnail e entrega de todos os vídeos e artes finais com identidade visual consistente.',
  },
  {
    num: '04',
    eyebrow: 'Presença que permanece',
    title: 'Publicação & Monitoramento',
    desc: 'Acompanhamento do desempenho, ajustes de posicionamento e guia de stories para encerrar o mês com consistência de marca — e começar o próximo mais forte.',
  },
]

export default function Workflow() {
  return (
    <section id="fluxo" className="section">
      <CenterWrapper>
        <Reveal className="section-header">
          <p className="section-eyebrow">Processo Mensal</p>
          <h2 className="section-title">Como <em>funciona</em></h2>
          <div className="section-rule" />
        </Reveal>
        <div className="workflow-track">
          <div className="workflow-line" />
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={(i + 1) as 1 | 2 | 3 | 4} className="workflow-step">
              <div className="step-num">{step.num}</div>
              <div className="step-body">
                <p className="step-week">{step.eyebrow}</p>
                <p className="step-title">{step.title}</p>
                <p className="step-desc">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </CenterWrapper>
    </section>
  )
}
