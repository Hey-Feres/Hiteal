class CreateAvaliacaoFisicas < ActiveRecord::Migration[6.0]
  def change
    create_table :avaliacao_fisicas do |t|
      t.references :aluno, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.text :historico_clinico
      t.text :historico_familiar
      t.text :limitacoes
      t.float :pressao_arterial
      t.float :frequencia_cardiaca
      t.float :massa_corporal
      t.float :estatura
      t.float :relacao_cintura_quadril
      t.float :indice_massa_corporal
      t.text :observacoes

      t.timestamps
    end
  end
end
