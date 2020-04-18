class CreateAvisos < ActiveRecord::Migration[6.0]
  def change
    create_table :avisos do |t|
      t.references :gym, null: false, foreign_key: true
      t.string :nome
      t.text :conteudo
      t.boolean :fixado, default: false
      t.datetime :intervalo_exibicao

      t.timestamps
    end
  end
end
