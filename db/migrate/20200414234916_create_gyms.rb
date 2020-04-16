class CreateGyms < ActiveRecord::Migration[6.0]
  def change
    create_table :gyms do |t|
      t.string :nome
      t.string :razao_social
      t.string :cnpj
      t.string :cidade
      t.string :estado
      t.string :cep
      t.string :numero
      t.string :lat
      t.string :lng

      t.timestamps
    end
  end
end
