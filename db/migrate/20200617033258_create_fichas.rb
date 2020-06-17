class CreateFichas < ActiveRecord::Migration[6.0]
  def change
    create_table :fichas do |t|
      t.references :exercicio, null: false, foreign_key: true
      t.references :aluno, null: false, foreign_key: true
      t.integer :repeticoes
      t.integer :series

      t.timestamps
    end
  end
end
