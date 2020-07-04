class AddFieldsToPagamento < ActiveRecord::Migration[6.0]
  def change
    add_column :pagamentos, :mp_pagamento_id, :string
    add_column :pagamentos, :mp_order_id, :string
  end
end
