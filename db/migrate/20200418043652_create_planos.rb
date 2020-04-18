class CreatePlanos < ActiveRecord::Migration[6.0]
  def change
    create_table :planos do |t|
      t.references :gym, null: false, foreign_key: true
      t.string :nome
      t.float :valor
      t.integer :periodo

      t.timestamps
    end
  end
end
