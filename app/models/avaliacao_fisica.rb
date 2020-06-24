class AvaliacaoFisica < ApplicationRecord
  belongs_to :aluno
  belongs_to :user

  has_one :avaliacao_fisica_perimetro
  has_one :avaliacao_fisica_ccdc

  accepts_nested_attributes_for :avaliacao_fisica_perimetro
  accepts_nested_attributes_for :avaliacao_fisica_ccdc
  
  def self.paginate page, aluno_id
    start = page.to_i * 10
    avaliacoes = AvaliacaoFisica.joins(:aluno).select("alunos.nome as aluno_nome, alunos.id as aluno_id, avaliacao_fisicas.*")
    .where('avaliacao_fisicas.id > ?', start).where(aluno_id: aluno_id).limit(20)
    avaliacoes
  end

  def self.recentes aluno_id
    @avaliacoes = AvaliacaoFisica.joins(:aluno).joins(:avaliacao_fisica_ccdc).joins(:avaliacao_fisica_perimetro)
      .select("alunos.nome as aluno_nome, alunos.id as aluno_id, avaliacao_fisicas.*, avaliacao_fisica_ccdcs.*, avaliacao_fisica_perimetros.*")
      .where(aluno_id: aluno_id).order(created_at: "desc").limit(3)
  	return @avaliacoes
  end
end
