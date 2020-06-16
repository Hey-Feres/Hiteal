class User < ApplicationRecord
	devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :trackable

	belongs_to :gym, optional: true

	has_one_attached :foto

	has_one :preferencia
  
  after_create :create_preferencia

  def self.current=(user)
    Thread.current[:current_user] = user
  end

  def self.current
    Thread.current[:current_user]
  end
  
  private
    def create_preferencia
      Preferencia.create(wallpaper: "Default", user_id: self.id)
    end
end
