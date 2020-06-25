class CreateAppSugestaoUpdates < ActiveRecord::Migration[6.0]
  def change
    create_table :app_sugestao_updates do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :votos, default: 0
      t.boolean :feito, default: false
      t.string :titulo
      t.text :descricao

      t.timestamps
    end
  end
end
