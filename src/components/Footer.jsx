function Footer() {
  return (
    <div className="footer">
      <p>📧 Dúvidas? Abra uma issue no repositório do GitHub</p>
      <p>⭐ Se este curso foi útil, considere dar uma estrela no repositório!</p>
      <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </p>
    </div>
  )
}

export default Footer
