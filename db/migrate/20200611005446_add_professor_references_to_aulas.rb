class AddProfessorReferencesToAulas < ActiveRecord::Migration[6.0]
  def change
	add_column :aulas, :professor_id, :integer
  end
end
