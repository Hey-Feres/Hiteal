class CreateAssinaturas < ActiveRecord::Migration[6.0]
  def change
    create_table :assinaturas do |t|
      t.references :gym, null: false, foreign_key: true
      t.float :valor
      t.datetime :vencimento
      t.string :status, default: "ativa"

      t.timestamps
    end
  end
end
