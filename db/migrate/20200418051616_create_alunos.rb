class CreateAlunos < ActiveRecord::Migration[6.0]
  def change
    create_table :alunos do |t|
      t.references :gym, null: false, foreign_key: true
      t.references :plano, null: false, foreign_key: true
      t.string :nome
      t.string :email
      t.string :senha
      t.datetime :nascimento
      t.string :access_token

      t.timestamps
    end
  end
end