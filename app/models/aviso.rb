class Aviso < ApplicationRecord
  belongs_to :gym

  validates_presence_of :nome
  validates_presence_of :conteudo
    
  def self.paginate page, gym_id
    start = page.to_i * 10
    avisos = Aviso.where('avisos.id > ?', start).where(gym_id: gym_id).limit(20)
    avisos
  end
  def self.search param, page, gym_id
    start = page.to_i * 10
    avisos = Aviso.where('avisos.id > ?', start)
      .where('avisos.nome LIKE ?', "%#{param}%")
      .where(gym_id: gym_id)
      .limit(20)
    avisos
  end
end
