class CreateAulas < ActiveRecord::Migration[6.0]
  def change
    create_table :aulas do |t|
      t.references :gym, null: false, foreign_key: true
      t.string :nome
      t.text :descricao
      t.boolean :repete, default: false
      t.integer :intervalo_repeticao
      t.datetime :data_inicio
      t.integer :duracao

      t.timestamps
    end
  end
end
