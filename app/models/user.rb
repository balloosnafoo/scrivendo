class User < ActiveRecord::Base
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 4, allow_nil: true }

  attr_reader :password

  has_many :sessions

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end
end
