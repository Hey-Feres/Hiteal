class CreateFuncionarios < ActiveRecord::Migration[6.0]
  def change
    create_table :funcionarios do |t|
      t.references :gym, null: false, foreign_key: true
      t.string :nome
      t.string :email
      t.string :sexo, default: 'feminino'
      t.datetime :nascimento
      t.string :cpf
      t.decimal :remuneracao
      t.string :funcao

      t.timestamps
    end
  end
end
