class AulaPresenca < ApplicationRecord
  belongs_to :aluno
  belongs_to :aula

  def self.salvar_presenca aluno_id, aula_id
  	presenca = AulaPresenca.create(aluno_id: aluno_id, aula_id: aula_id)
  	return presenca
  end

end
