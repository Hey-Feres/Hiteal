class CreateAulaPresencas < ActiveRecord::Migration[6.0]
  def change
    create_table :aula_presencas do |t|
      t.references :aluno, null: false, foreign_key: true
      t.references :aula, null: false, foreign_key: true

      t.timestamps
    end
  end
end
