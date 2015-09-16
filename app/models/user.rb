class User < ActiveRecord::Base
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 4, allow_null: true }

  attr_reader :password

  def password=(password)
  end 
end
