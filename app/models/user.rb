class User < ApplicationRecord
	devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :trackable

	belongs_to :gym, optional: true
  
  alias_attribute :app_sugestoes_updates, :app_sugestao_updates

  has_many :app_sugestao_updates, dependent: :destroy

	has_one_attached :foto

	has_one :preferencia
  
  after_create :create_preferencia

  def self.current=(user)
    Thread.current[:current_user] = user
  end

  def self.current
    Thread.current[:current_user]
  end

  def self.paginate page, gym_id
    start = page.to_i * 10
    users = User.where('users.id > ?', start).where(gym_id: gym_id).limit(20)
    users
  end
  
  def self.search param, page, gym_id
    start = page.to_i * 10
    users = User.where('users.id > ?', start)
      .where('users.nome LIKE ?', "%#{param}%")
      .where(gym_id: gym_id)
      .limit(20)
    users
  end

  private
    def create_preferencia
      Preferencia.create(wallpaper: "Default", user_id: self.id)
    end
end
